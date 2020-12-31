# Uploading images with paperclip!

##What is paperclip?
"For some reason, file attachment is annoying. I don’t know why, and I know a lot of people have attempted to solve the problem in the past, myself included. Yet it still is. Having gotten fed up with gotchas and design decisions that we didn’t agree with, I went and wrote Paperclip on the plane to RailsConf last year. We’ve been using it here in various forms since and IMHO it’s the way to handle uploads, and finally decided that it should be released." -- John Yurek, Thoughbot, March 2008 

With paperclip, a file is treated like any other attribute. It’s assigned like any other attribute. You can say what thumbnails are made, and what resolution and format they are, and where they should be stored.

So why use paperclip? <strong>It makes uploading files (e.g. images) very simple.</strong>

## Let's add images to our Rails projects!

This cheatsheet assumes that you have already successfully deployed your app to heroku.  If you have not done that yet, refer to [rails heroku deployment cheatsheet][Rails Heroku Cheatsheet].

Since we will be adding this to a rails projects deployed to Heroku, we will use their [excellent tutorial][Heroku Rails Paperclip Tutorial] as the basis for this cheatsheet.

### Step 1 - Amazon AWS

We will be using Amazon Web Services to store our images in the cloud.  That means everyone needs to sign up for an account and create a project.  [This tutorial][Heroku Amazon S3 Tutorial] walks through the process we are about to do.

1.	Go to [https://aws.amazon.com/][Amazon AWS] and sign-in/create an account.
2. Click on 'My Account' and select 'Security Credentials'.
3. You should get a pop-up about AWS Best Practices.  Click on 'Get Started With IAM Users'
4. Click on 'Create New Users' and enter a user name.
5. Once you do that, you will be given security credentials for that user.  You must not lose the Secret Access Key -- you will not be able to retrieve this later.  You can download the credentials or copy/paste them somewhere.  We will need them in a bit, but as Amazon says, "The account credentials provide unlimited access to your AWS resources." So, make sure you safeguard these keys.  If they get out, I recommend deleting the user they are attached to.
6. Click on 'Create Group'.  After naming your group, select the 'AmazonS3FullAccess' policy template.  Click 'Next Step', then 'Create Group'
7. Click on 'Users' in the left sidebar. Now, click on your new user. In the User summary page, click the button 'Add User to Groups'. Select the group you just created and add the user to that group.
8. **Consider Additional Steps.** Click on your Dashboard -- the uppermost link in the left sidebar. The Security Status section lists additional steps you can take to safeguard your account.
9. Now that we have a user, we need a bucket to store our images in.  Go to [Amazon S3 Management Console][Amazon S3 Management Console]
10. Click on 'Create Bucket', remember your bucket name and region (Usually, a closer region to your userbase is the best choice.).  We will need them later.

### Step 2 - Add Necessary Gems

Add paperclip, aws-sdk, and dotenv-rails to our gems for the project.

```
# Gemfile
gem 'paperclip'
gem 'aws-sdk', '~> 2.3'
```

We want to add dotenv-rails into our development and test environments only, since we will not need it in production.  So look for the:

```
group :development, :test do

end
```
block and place the dotenv-rails gem inside the do-end block

```
gem 'dotenv-rails'
```

As always, we need to bundle install after adding new gems.

```bash
$ bundle
```

### Step 3 - Setup Paperclip to use our AWS bucket.

```
  config.paperclip_defaults = {
    storage: :s3,
    s3_host_name: ENV['S3_HOST_NAME'],
    s3_credentials: {
      bucket: ENV['S3_BUCKET_NAME'],
      access_key_id: ENV['AWS_ACCESS_KEY_ID'],
      secret_access_key: ENV['AWS_SECRET_ACCESS_KEY'],
      s3_region: ENV['AWS_REGION']
    }
  }
```

Add the above code snippet to the following two files, at the bottom, before the final `end`

`app/config/environments/development.rb`

`app/config/environments/production.rb`

#### Step 4 - Create a .env file to store your sensitive env variables

At the root of your project create a file called `.env`

Inside of this file place this code:

```
S3_BUCKET_NAME=nameofyourbucket
AWS_ACCESS_KEY_ID=YOURAWSACCESSKEYID
AWS_SECRET_ACCESS_KEY=YOURAWSSECRETACCESSKEY
AWS_REGION=your-aws-bucket-region
S3_HOST_NAME=s3-us-west-1.amazonaws.com
```

Put the appropriate information after the equal signs.  NO SPACES, NO QUOTATION MARKS.  Your AWS_REGION will be `us-west-1` is if you chose Northern California.  If you chose Oregon, it is `us-west-2`. The region part of `S3_HOST_NAME` should match your AWS_REGION.  

To find your region based on the area your chose, consult [here][Amazon S3 Regions]

Do you have a .gitignore file?  If not, you probably should. Add `.env` to your .gitignore file.  This will make it so that your .env file does not get added and tracked by your git repo.  Why would we want to do this?

### Step 5 - let our database know what it will be storing

We need to add a place in our database to store information about file uploads. We should run a migration to add some image properties to the DB. <br><br>
Let's make an empty migration, then we can add stuff to it, and once we're done we can run ```rake db:migrate```

```bash
$ rails g migration AddPaperclipToGarments
```

```ruby
# db/migrate/20161028130240_add_paperclip_to_garments.rb
class AddPaperclipToGarments < ActiveRecord::Migration[5.0]
  def change
    add_attachment :garments, :image
  end
end
```

```add_attachment``` is a special Paperclip method that says we want to change the garments table so that we can add an attachment to each garment (which we are calling 'image'). Run this migration, then take a look at our schema.	

```bash
$ rake db:migrate
```

Check out those schema!

```
# db/schema.rb
create_table "garments", force: :cascade do |t|
  t.string   "name"
  t.string   "color"
  t.string   "material"
  t.float    "price"
  t.boolean  "cool"
  t.datetime "created_at",         null: false
  t.datetime "updated_at",         null: false
  t.string   "image_file_name"
  t.string   "image_content_type"
  t.integer  "image_file_size"
  t.datetime "image_updated_at"
end
```

### Step 6 - Tell our model that its objects have attached files
In our Garment model let's tell it that garments will have an attached file (called image). When we want to refer to that file, we might want the small version, the med version, or the large version. We can define that here too. 

```
# models/garment.rb
class Garment < ApplicationRecord
  has_attached_file :image, styles: { 
    small: "64x64",
    med: "100x100",
    large: "200x200"
  }
end
```

[Rubydoc Paperclip Documentation][Paperclip Class Methods]


<br>
While we're here, let's also do something else. The new version of Paperclip is secure by default. You have to specify which file types you are going to allow to be uploaded. This is to prevent 'content type spoofing', e.g. uploading a php file instead of an image which will then become publicly accessible. 

Which file types shall we allow? jpgs, pngs, gifs seem ok. 

```
# models/garment.rb
class Garment < ApplicationRecord
  has_attached_file :image, styles: { 
    small: "64x64",
    med: "100x100",
    large: "200x200"
  }
  
  validates_attachment_content_type :image, :content_type => ["image/jpg", "image/jpeg", "image/png", "image/gif"]
end
```

[Paperclip Documentation][Paperclip Github Repo]


Speaking of security, there's one more thing we need to do - let the image part of the params through for when we want to save an image!

```
# controllers/garments_controller.rb
private
  def garment_params
    params.require(:garment).permit(:name, :color, :material, :price, :cool, :image)
  end
```

### Step 7 - Fiddle with the view templates

Now we need to make sure the form for a new post allows us to upload a file:

```
#views/garments/_form.html.erb
  <div>
    <%= f.label :image %>
  	<%= f.file_field :image%>
  </div>
```

...and that we can see the image in the index page:

```
#views/garments/index.html.erb
<%= image_tag garment.image.url(:small) %>
```

### Step 8 - Test locally, then push to heroku and set your production environment variables.

Test that you can upload files and see images locally.  Once you know that works commit your changes.

Remember how we placed the dotenv-rails gem in development and test only?  Since our .env file does not get pushed to heroku (it's in our gitignore, so that other people can't see our access keys). So let's set our environment variables in heroku.  The command to set env variables in heroku is `heroku config:set`.  You should do this for every line in your .env file.

```
heroku config:set S3_BUCKET_NAME=nameofyourbucket
```
```
heroku config:set AWS_ACCESS_KEY_ID=YOURAWSACCESSKEYID
```
```
heroku config:set AWS_SECRET_ACCESS_KEY=YOURAWSSECRETACCESSKEY
```
```
heroku config:set AWS_REGION=your-aws-bucket-region
```
```
heroku config:set S3_HOST_NAME=s3-us-west-1.amazonaws.com
```

After you have set your env variables, push to heroku.  Make sure you `heroku run rake db:migrate` to change the schema for your production database after you push.  

If file upload was working locally, it should now be working in your deployed version.  Woo hoo!!!

If you don't want to use AWS to store images from development, you can remove the paperclip config from `app/config/environments/development.rb` and they will be stored locally instead.  


### Resources

[Rails Heroku Cheatsheet]

[Heroku Rails Paperclip Tutorial]

[Heroku Amazon S3 Tutorial]

[Amazon AWS]

[Amazon S3 Management Console]

[Amazon S3 Regions]

[Paperclip Class Methods]

[Paperclip Github Repo]


[Rails Heroku Cheatsheet]: https://github.com/ga-students/WDI_SM_38/tree/master/work/05-week/03_heroku_deployment
[Heroku Rails Paperclip Tutorial]: https://devcenter.heroku.com/articles/paperclip-s3
[Heroku Amazon S3 Tutorial]: https://devcenter.heroku.com/articles/s3
[Amazon AWS]: https://aws.amazon.com/
[Amazon S3 Management Console]: https://console.aws.amazon.com/s3/home
[Amazon S3 Regions]: http://docs.aws.amazon.com/general/latest/gr/rande.html#s3_region
[Paperclip Class Methods]: http://www.rubydoc.info/gems/paperclip/Paperclip/ClassMethods
[Paperclip Github Repo]: https://github.com/thoughtbot/paperclip#security-validations

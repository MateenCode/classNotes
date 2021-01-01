![ga](../../ga_cog.png)


<hr>
Title: An Ocean of Possibility <br>
Type: Lesson<br>
Duration: 2hrs <br>
Creator: Arthur Bernier Jr<br>
Topics: VPS, SSH, Wordpress<br>
<hr>

# Objectives 
- Setting UP Digital Ocean Droplet that can run wordpress
- Compare/contrast wordpress.com and wordpress.org
- Install wordpress locally
- Create a custom wordpress theme
- Explain what the loop is and how it works
- Use wordpress plugins to customize new post view
- Create a custom post type

# Setting Up A VPS with Digital Ocean
1. Sign Up For Digital Ocean with this [__link__](https://try.digitalocean.com/frontend-masters/) to get 100$ in credits
1. A VPS at DO costs $5/month minimum
1. Next after you have set that up we will create a Droplet
![](https://lh3.googleusercontent.com/PS533bjwQ0nPWSulktOEkGUExq7jPqujF5Rb8gsagMQ5SUttf5PK-JL-IuXlSHZ0invi-O3cl3bRJElkZp0c9XSHMlJnlW3z1fEjbYBj4DqGPmlxbqr-BKJCyinBxZTjCmVIXg4uo64)
1. We will be creating our Droplets with Ubuntu because it is the Server Industry standard and the most user friendly
1. Next we will create an SSH key or use one that we have to log in to our Server
we need this to be able to log in to our server from our computer
    ```bash
        cd ~/.ssh
        ls
        ssh-keygen
        ```
1. Below is an example of what you'll see
![](https://lh6.googleusercontent.com/tFeJ1WhUv6-mB_4Cp9OtmFZIHtdR5-5TJaouszQIvyUfEz64vc-CtcXwXyeUUt_pJZImXuGIZIp0NFToUn0WRQJbI6a79BlM0GFEDm6dSfMEXaQMa1cztnSPhXMbr0XZamY93QT_FpI)
1. You'll want to make a unique key name and not overwrite any keys that previously existed so take your time don't press enter
to fast, read the steps

    ```bash
    ls | grep keyname
    keyname 
    keyname.pub
    ```
1. Once you've set up your server we need to log in with that ssh key
    ```bash
    ssh -i ~/.ssh/keyname root@YOUR_IP
   ```
1. Add 2 A Records with your IP address @ and www
1. Use digital ocean to add domain and update nameserver on godaddy



## Getting started with WordPress

WordPress is a content management system. You
get a nicely designed admin area for managing all of
your content on the site. WordPress allows for
plugins to extend the built in functionality of
WordPress. About 25% of all sites on the internet
are powered by WordPress. WordPress is an open
source project which means you can download and
use the files for free.

## wordpress.com vs wordpress.org

On wordpress.org you can download and install a software script called
WordPress. To do this you need a web host who meets the minimum
requirements and a little time. WordPress is completely customizable
and can be used for almost anything. There is also a service called
WordPress.com which lets you get started with a new and free
WordPress-based blog in seconds, but varies in several ways and is
less flexible than the WordPress you download and install yourself.

<hr/>
<div class="section-content section-content-growable content Tutorial-content content-has-mobile-image">
<img alt="How To Install Linux, Nginx, MySQL, PHP (LEMP stack) on Ubuntu 18.04" title="How To Install Linux, Nginx, MySQL, PHP (LEMP stack) on Ubuntu 18.04" class="tutorial-image-mobile" src="https://community-cdn-digitalocean-com.global.ssl.fastly.net/assets/tutorials/images/large/Install_LEMP-twitter_updated_logo.png?1564575983">

<p>The LEMP software stack is a group of software that can be used to serve dynamic web pages and web applications. This is an acronym that describes a <strong>L</strong>inux operating system, with an Nginx (pronounced like “<strong>E</strong>ngine-X”) web server. The backend data is stored in the <strong>M</strong>ySQL database and the dynamic processing is handled by <strong>P</strong>HP.</p>

<p>This guide demonstrates how to install a LEMP stack on an Ubuntu 18.04 server. The Ubuntu operating system takes care of the first requirement. We will describe how to get the rest of the components up and running.</p>

<a name="prerequisites" data-unique="prerequisites"></a><a name="prerequisites" data-unique="prerequisites"></a><h2 id="prerequisites">Prerequisites</h2>

<p>Before you complete this tutorial, you should have a regular, non-root user account on your server with <code>sudo</code> privileges. Set up this account by completing our <a href="https://www.digitalocean.com/community/tutorials/initial-server-setup-with-ubuntu-18-04">initial server setup guide for Ubuntu 18.04</a>.</p>

<p>Once you have your user available, you are ready to begin the steps outlined in this guide.</p>

<a name="step-1-–-installing-the-nginx-web-server" data-unique="step-1-–-installing-the-nginx-web-server"></a><a name="step-1-–-installing-the-nginx-web-server" data-unique="step-1-–-installing-the-nginx-web-server"></a><h2 id="step-1-–-installing-the-nginx-web-server">Step 1 – Installing the Nginx Web Server</h2>

<p>In order to display web pages to our site visitors, we are going to employ Nginx, a modern, efficient web server.</p>

<p>All of the software used in this procedure will come from Ubuntu’s default package repositories. This means we can use the <code>apt</code> package management suite to complete the necessary installations.</p>

<p>Since this is our first time using <code>apt</code> for this session, start off by updating your server’s package index. Following that, install the server:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo apt update
</li><li class="line" prefix="$">sudo apt install nginx
</li><li class="line" prefix="$">sudo apt install neovim
</li></ul></code></pre>
<p>On Ubuntu 18.04, Nginx is configured to start running upon installation.</p>

<p>If you have the <code>ufw</code> firewall running, as outlined in the initial setup guide, you will need to allow connections to Nginx. Nginx registers itself with <code>ufw</code> upon installation, so the procedure is rather straightforward.</p>

<p>It is recommended that you enable the most restrictive profile that will still allow the traffic you want. Since you haven’t configured SSL for your server in this guide, you will only need to allow traffic on port <code>80</code>.</p>

<p>Enable this by typing:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo ufw allow 'Nginx HTTP'
</li></ul></code></pre>
<p>You can verify the change by running:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo ufw status
</li></ul></code></pre>
<p>This command’s output will show that HTTP traffic is allowed:</p>
<pre class="code-pre "><code><div class="secondary-code-label " title="Output">Output</div>Status: active

To                         Action      From
--                         ------      ----
OpenSSH                    ALLOW       Anywhere
Nginx HTTP                 ALLOW       Anywhere
OpenSSH (v6)               ALLOW       Anywhere (v6)
Nginx HTTP (v6)            ALLOW       Anywhere (v6)
</code></pre>
<p>With the new firewall rule added, you can test if the server is up and running by accessing your server’s domain name or public IP address in your web browser.</p>

<p>If you do not have a domain name pointed at your server and you do not know your server’s public IP address, you can find it by running the following command:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">ip addr show eth0 | grep inet | awk '{ print $2; }' | sed 's/\/.*$//'
</li></ul></code></pre>
<p>This will print out a few IP addresses. You can try each of them in turn in your web browser.</p>

<p>As an alternative, you can check which IP address is accessible, as viewed from other locations on the internet:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">curl -4 icanhazip.com
</li></ul></code></pre>
<p>Type the address that you receive in your web browser and it will take you to Nginx’s default landing page:</p>
<pre class="code-pre "><code>http://<span class="highlight">server_domain_or_IP</span>
</code></pre>
<p><img src="https://assets.digitalocean.com/articles/lemp_ubuntu_1604/nginx_default.png" alt="Nginx default page"></p>

<p>If you see the above page, you have successfully installed Nginx.</p>

<a name="step-2-–-installing-mysql-to-manage-site-data" data-unique="step-2-–-installing-mysql-to-manage-site-data"></a><a name="step-2-–-installing-mysql-to-manage-site-data" data-unique="step-2-–-installing-mysql-to-manage-site-data"></a><h2 id="step-2-–-installing-mysql-to-manage-site-data">Step 2 – Installing MySQL to Manage Site Data</h2>

<p>Now that you have a web server, you need to install MySQL (a database management system) to store and manage the data for your site.</p>

<p>Install MySQL by typing:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo apt install mysql-server
</li></ul></code></pre>
<p>The MySQL database software is now installed, but its configuration is not yet complete.</p>

<p>To secure the installation, MySQL comes with a script that will ask whether we want to modify some insecure defaults. Initiate the script by typing:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo mysql_secure_installation
</li></ul></code></pre>
<p>This script will ask if you want to configure the <code>VALIDATE PASSWORD PLUGIN</code>.</p>

<p><span class="warning"><strong>Warning:</strong> Enabling this feature is something of a judgment call. If enabled, passwords which don’t match the specified criteria will be rejected by MySQL with an error. This will cause issues if you use a weak password in conjunction with software which automatically configures MySQL user credentials, such as the Ubuntu packages for phpMyAdmin. It is safe to leave validation disabled, but you should always use strong, unique passwords for database credentials.<br></span></p>

<p>Answer <code>Y</code> for yes, or anything else to continue without enabling.</p>
<pre class="code-pre "><code>VALIDATE PASSWORD PLUGIN can be used to test passwords
and improve security. It checks the strength of password
and allows the users to set only those passwords which are
secure enough. Would you like to setup VALIDATE PASSWORD plugin?

Press y|Y for Yes, any other key for No:
</code></pre>
<p>If you’ve enabled validation, the script will also ask you to select a level of password validation. Keep in mind that if you enter <strong>2</strong> – for the strongest level – you will receive errors when attempting to set any password which does not contain numbers, upper and lowercase letters, and special characters, or which is based on common dictionary words.</p>
<pre class="code-pre "><code>There are three levels of password validation policy:

LOW    Length &gt;= 8
MEDIUM Length &gt;= 8, numeric, mixed case, and special characters
STRONG Length &gt;= 8, numeric, mixed case, special characters and dictionary                  file

Please enter 0 = LOW, 1 = MEDIUM and 2 = STRONG: <span class="highlight">1</span>
</code></pre>
<p>Next, you’ll be asked to submit and confirm a root password:</p>
<pre class="code-pre "><code>Please set the password for root here.

New password:

Re-enter new password:
</code></pre>
<p>For the rest of the questions, you should press <code>Y</code> and hit the <code>ENTER</code> key at each prompt. This will remove some anonymous users and the test database, disable remote root logins, and load these new rules so that MySQL immediately respects the changes we have made.</p>

<p>Note that in Ubuntu systems running MySQL 5.7 (and later versions), the <strong>root</strong> MySQL user is set to authenticate using the <code>auth_socket</code> plugin by default rather than with a password. This allows for some greater security and usability in many cases, but it can also complicate things when you need to allow an external program (e.g., phpMyAdmin) to access the user.</p>

<p>If using the <code>auth_socket</code> plugin to access MySQL fits with your workflow, you can proceed to Step 3. If, however, you prefer to use a password when connecting to MySQL as <strong>root</strong>, you will need to switch its authentication method from <code>auth_socket</code> to <code>mysql_native_password</code>. To do this, open up the MySQL prompt from your terminal:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo mysql
</li></ul></code></pre>
<p>Next, check which authentication method each of your MySQL user accounts use with the following command:</p>
<pre class="code-pre custom_prefix prefixed"><code><ul class="prefixed"><li class="line" prefix="mysql>">SELECT user,authentication_string,plugin,host FROM mysql.user;
</li></ul></code></pre><pre class="code-pre "><code><div class="secondary-code-label " title="Output">Output</div>+------------------+-------------------------------------------+-----------------------+-----------+
| user             | authentication_string                     | plugin                | host      |
+------------------+-------------------------------------------+-----------------------+-----------+
| root             |                                           | auth_socket           | localhost |
| mysql.session    | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| mysql.sys        | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| debian-sys-maint | *CC744277A401A7D25BE1CA89AFF17BF607F876FF | mysql_native_password | localhost |
+------------------+-------------------------------------------+-----------------------+-----------+
4 rows in set (0.00 sec)
</code></pre>
<p>In this example, you can see that the <strong>root</strong> user does in fact authenticate using the <code>auth_socket</code> plugin. To configure the <strong>root</strong> account to authenticate with a password, run the following <code>ALTER USER</code> command. Be sure to change <code><span class="highlight">password</span></code> to a strong password of your choosing:</p>
<pre class="code-pre custom_prefix prefixed"><code><ul class="prefixed"><li class="line" prefix="mysql>">ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '<span class="highlight">password</span>';
</li></ul></code></pre>
<p>Then, run <code>FLUSH PRIVILEGES</code> which tells the server to reload the grant tables and put your new changes into effect:</p>
<pre class="code-pre custom_prefix prefixed"><code><ul class="prefixed"><li class="line" prefix="mysql>">FLUSH PRIVILEGES;
</li></ul></code></pre>
<p>Check the authentication methods employed by each of your users again to confirm that <strong>root</strong> no longer authenticates using the <code>auth_socket</code> plugin:</p>
<pre class="code-pre custom_prefix prefixed"><code><ul class="prefixed"><li class="line" prefix="mysql>">SELECT user,authentication_string,plugin,host FROM mysql.user;
</li></ul></code></pre><pre class="code-pre "><code><div class="secondary-code-label " title="Output">Output</div>+------------------+-------------------------------------------+-----------------------+-----------+
| user             | authentication_string                     | plugin                | host      |
+------------------+-------------------------------------------+-----------------------+-----------+
| root             | *3636DACC8616D997782ADD0839F92C1571D6D78F | <span class="highlight">mysql_native_password</span> | localhost |
| mysql.session    | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| mysql.sys        | *THISISNOTAVALIDPASSWORDTHATCANBEUSEDHERE | mysql_native_password | localhost |
| debian-sys-maint | *CC744277A401A7D25BE1CA89AFF17BF607F876FF | mysql_native_password | localhost |
+------------------+-------------------------------------------+-----------------------+-----------+
4 rows in set (0.00 sec)
</code></pre>
<p>You can see in this example output that the <strong>root</strong> MySQL user now authenticates using a password. Once you confirm this on your own server, you can exit the MySQL shell:</p>
<pre class="code-pre custom_prefix prefixed"><code><ul class="prefixed"><li class="line" prefix="mysql>">exit
</li></ul></code></pre>
<span class="note"><p>
<strong>Note</strong>: After configuring your <strong>root</strong> MySQL user to authenticate with a password, you’ll no longer be able to access MySQL with the <code>sudo mysql</code> command used previously. Instead, you must run the following:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">mysql -u root -p
</li></ul></code></pre>
<p>After entering the password you just set, you will see the MySQL prompt.<br></p></span>

<p>At this point, your database system is now set up and you can move on to installing PHP.</p>

<a name="step-3-–-installing-php-and-configuring-nginx-to-use-the-php-processor" data-unique="step-3-–-installing-php-and-configuring-nginx-to-use-the-php-processor"></a><a name="step-3-–-installing-php-and-configuring-nginx-to-use-the-php-processor" data-unique="step-3-–-installing-php-and-configuring-nginx-to-use-the-php-processor"></a><h2 id="step-3-–-installing-php-and-configuring-nginx-to-use-the-php-processor">Step 3 – Installing PHP and Configuring Nginx to Use the PHP Processor</h2>

<p>You now have Nginx installed to serve your pages and MySQL installed to store and manage your data. However, you still don’t have anything that can generate dynamic content. This is where PHP comes into play.</p>

<p>Since Nginx does not contain native PHP processing like some other web servers, you will need to install <code>php-fpm</code>, which stands for “fastCGI process manager”. We will tell Nginx to pass PHP requests to this software for processing.</p>

<span class="note"><p>
<strong>Note</strong>: Depending on your cloud provider, you may need to add Ubuntu’s <code>universe</code> repository, which includes free and open-source software maintained by the Ubuntu community, before installing the <code>php-fpm</code> package. You can do this by typing:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo add-apt-repository universe
</li></ul></code></pre>
<p></p></span>

<p>Install the <code>php-fpm</code> module along with an additional helper package, <code>php-mysql</code>, which will allow PHP to communicate with your database backend. The installation will pull in the necessary PHP core files. Do this by typing:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo apt install php-fpm php-mysql
</li></ul></code></pre>
<p>You now have all of the required LEMP stack components installed, but you still need to make a few configuration changes in order to tell Nginx to use the PHP processor for dynamic content.</p>

<p>This is done on the server block level (server blocks are similar to Apache’s virtual hosts). To do this, open a new server block configuration file within the <code>/etc/nginx/sites-available/</code> directory. In this example, the new server block configuration file is named <code>example.com</code>, although you can name yours whatever you’d like:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo nvim /etc/nginx/sites-available/<span class="highlight">example.com</span>
</li></ul></code></pre>
<p>By editing a new server block configuration file, rather than editing the default one, you’ll be able to easily restore the default configuration if you ever need to.</p>

<p>Add the following content, which was taken and slightly modified from the default server block configuration file, to your new server block configuration file:</p>
<div class="code-label " title="/etc/nginx/sites-available/example.com">/etc/nginx/sites-available/example.com</div><pre class="code-pre "><code>server {
        listen 80;
        root /var/www/html;
        index index.php index.html index.htm index.nginx-debian.html;
        server_name <span class="highlight">example.com</span>;

        location / {
                try_files $uri $uri/ =404;
        }

        location ~ \.php$ {
                include snippets/fastcgi-php.conf;
                fastcgi_pass unix:/var/run/php/php7.2-fpm.sock;
        }

        location ~ /\.ht {
                deny all;
        }
}
</code></pre>
<p>Here’s what each of these directives and location blocks do:</p>

<ul>
<li><code>listen</code> — Defines what port Nginx will listen on. In this case, it will listen on port <code>80</code>, the default port for HTTP.</li>
<li><code>root</code> — Defines the document root where the files served by the website are stored.</li>
<li><code>index</code> — Configures Nginx to prioritize serving files named <code>index.php</code> when an index file is requested, if they’re available.</li>
<li><code>server_name</code> — Defines which server block should be used for a given request to your server. <strong>Point this directive to your server’s domain name or public IP address.</strong></li>
<li><code>location /</code> — The first location block includes a <code>try_files</code> directive, which checks for the existence of files matching a URI request. If Nginx cannot find the appropriate file, it will return a 404 error.</li>
<li><code>location ~ \.php$</code> — This location block handles the actual PHP processing by pointing Nginx to the <code>fastcgi-php.conf</code> configuration file and the <code>php7.2-fpm.sock</code> file, which declares what socket is associated with <code>php-fpm</code>.</li>
<li><code>location ~ /\.ht</code> — The last location block deals with <code>.htaccess</code> files, which Nginx does not process. By adding the <code>deny all</code> directive, if any <code>.htaccess</code> files happen to find their way into the document root they will not be served to visitors.</li>
</ul>

<p>After adding this content, save and close the file. Enable your new server block by creating a symbolic link from your new server block configuration file (in the <code>/etc/nginx/sites-available/</code> directory) to the <code>/etc/nginx/sites-enabled/</code> directory:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo ln -s /etc/nginx/sites-available/<span class="highlight">example.com</span> /etc/nginx/sites-enabled/
</li></ul></code></pre>
<p>Then, unlink the default configuration file from the <code>/sites-enabled/</code> directory:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo unlink /etc/nginx/sites-enabled/default
</li></ul></code></pre>
<span class="note"><p>
<strong>Note</strong>: If you ever need to restore the default configuration, you can do so by recreating the symbolic link, like this:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo ln -s /etc/nginx/sites-available/default /etc/nginx/sites-enabled/
</li></ul></code></pre>
<p></p></span>

<p>Test your new configuration file for syntax errors by typing:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo nginx -t
</li></ul></code></pre>
<p>If any errors are reported, go back and recheck your file before continuing.</p>

<p>When you are ready, reload Nginx to make the necessary changes:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo systemctl reload nginx
</li></ul></code></pre>
<p>This concludes the installation and configuration of your LEMP stack. However, it’s prudent to confirm that all of the components can communicate with one another.</p>

<a name="step-4-–-creating-a-php-file-to-test-configuration" data-unique="step-4-–-creating-a-php-file-to-test-configuration"></a><a name="step-4-–-creating-a-php-file-to-test-configuration" data-unique="step-4-–-creating-a-php-file-to-test-configuration"></a><h2 id="step-4-–-creating-a-php-file-to-test-configuration">Step 4 – Creating a PHP File to Test Configuration</h2>

<p>Your LEMP stack should now be completely set up. You can test it to validate that Nginx can correctly hand <code>.php</code> files off to the PHP processor.</p>

<p>To do this, use your text editor to create a test PHP file called <code>info.php</code> in your document root:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo nano /var/www/html/info.php
</li></ul></code></pre>
<p>Enter the following lines into the new file. This is valid PHP code that will return information about your server:</p>
<div class="code-label " title="/var/www/html/info.php">/var/www/html/info.php</div><pre class="code-pre "><code>&lt;?php
phpinfo();
</code></pre>
<p>When you are finished, save and close the file.</p>

<p>Now, you can visit this page in your web browser by visiting your server’s domain name or public IP address followed by <code>/info.php</code>:</p>
<pre class="code-pre "><code>http://<span class="highlight">your_server_domain_or_IP</span>/info.php
</code></pre>
<p>You should see a web page that has been generated by PHP with information about your server:</p>

<p class="growable"><img src="https://assets.digitalocean.com/lemp_ubuntu_1804/php_info_1804.png" alt="PHP page info"></p>

<p>If you see a page that looks like this, you’ve set up PHP processing with Nginx successfully.</p>

<p>After verifying that Nginx renders the page correctly, it’s best to remove the file you created as it can actually give unauthorized users some hints about your configuration that may help them try to break in. You can always regenerate this file if you need it later.</p>

<p>For now, remove the file by typing:</p>
<pre class="code-pre command prefixed"><code><ul class="prefixed"><li class="line" prefix="$">sudo rm /var/www/html/info.php
</li></ul></code></pre>
<p>With that, you now have a fully-configured and functioning LEMP stack on your Ubuntu 18.04 server.</p>

<a name="conclusion" data-unique="conclusion"></a><a name="conclusion" data-unique="conclusion"></a><h2 id="conclusion">Conclusion{Break}</h2>

<p>A LEMP stack is a powerful platform that will allow you to set up and serve nearly any website or application from your server.</p>

<p>There are a number of next steps you could take from here. For example, you should ensure that connections to your server are secured. To this end, you could <a href="https://www.digitalocean.com/community/tutorials/how-to-secure-nginx-with-let-s-encrypt-on-ubuntu-18-04">secure your Nginx installation with Let’s Encrypt</a>. By following this guide, you will acquire a free TLS/SSL certificate for your server, allowing it to serve content over HTTPS. </p>

 </div>

</div>
<hr/>

# Introduction
WordPress is the most popular CMS (content management system) on the internet. It allows you to easily set up flexible blogs and websites on top of a MySQL backend with PHP processing. WordPress has seen incredible adoption and is a great choice for getting a website up and running quickly. After setup, almost all administration can be done through the web frontend.

In this guide, we’ll focus on getting a WordPress instance set up on a LEMP stack (Linux, Nginx, MySQL, and PHP) on an Ubuntu 18.04 server.

# Prerequisites
In order to complete this tutorial, you will need access to an Ubuntu 18.04 server( The one we made earlier in the day)

You will need to perform the following tasks before you can start this guide:

Create a sudo user on your server: We will be completing the steps in this guide using a non-root user with sudo privileges. You can create a user with sudo privileges by following our Ubuntu 18.04 initial server setup guide.

## Step 1 — Creating a MySQL Database and User for WordPress
The first step that we will take is a preparatory one. WordPress uses MySQL to manage and store site and user information. We have MySQL installed already, but we need to make a database and a user for WordPress to use.

To get started, log into the MySQL root (administrative) account. If MySQL is configured to use the auth_socket authentication plugin (the default), you can log into the MySQL administrative account using sudo:

```sudo mysql```
If you changed the authentication method to use a password for the MySQL root account, use the following format instead:

```mysql -u root -p```
You will be prompted for the password you set for the MySQL root account.

First, we can create a separate database that WordPress can control. You can call this whatever you would like, but we will be using wordpress in this guide to keep it simple. You can create the database for WordPress by typing:
```
CREATE DATABASE wordpress DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci;
```
Note: Every MySQL statement must end in a semi-colon (;). Check to make sure this is present if you are running into any issues.

Next, we are going to create a separate MySQL user account that we will use exclusively to operate on our new database. Creating one-function databases and accounts is a good idea from a management and security standpoint. We will use the name wordpressuser in this guide. Feel free to change this if you’d like.

We are going to create this account, set a password, and grant access to the database we created. We can do this by typing the following command. Remember to choose a strong password here for your database user:

GRANT ALL ON wordpress.* TO 'wordpressuser'@'localhost' IDENTIFIED BY 'password';
You now have a database and user account, each made specifically for WordPress. We need to flush the privileges so that the current instance of MySQL knows about the recent changes we’ve made:
```
FLUSH PRIVILEGES;
```
Exit out of MySQL by typing:
```
EXIT;
```
The MySQL session will exit, returning you to the regular Linux shell.

## Step 2 — Installing Additional PHP Extensions
When setting up our LEMP stack, we only required a very minimal set of extensions in order to get PHP to communicate with MySQL. WordPress and many of its plugins leverage additional PHP extensions.

We can download and install some of the most popular PHP extensions for use with WordPress by typing:
```
sudo apt update
sudo apt install php-curl php-gd php-intl php-mbstring php-soap php-xml php-xmlrpc php-zip
```
Note: Each WordPress plugin has its own set of requirements. Some may require additional PHP packages to be installed. Check your plugin documentation to discover its PHP requirements. If they are available, they can be installed with apt as demonstrated above.

When you are finished installing the extensions, restart the PHP-FPM process so that the running PHP processor can leverage the newly installed features:
```
sudo systemctl restart php7.2-fpm
```
We now have all of the necessary PHP extensions installed on the server.

## Step 3 — Configuring Nginx
Next, we will be making a few minor adjustments to our Nginx server block files. Based on the prerequisite tutorials, you should have a configuration file for your site in the /etc/nginx/sites-available/ directory configured to respond to your server’s domain name or IP address and protected by a TLS/SSL certificate. We’ll use /etc/apache2/sites-available/wordpress as an example here, but you should substitute the path to your configuration file where appropriate.

Additionally, we will use /var/www/wordpress as the root directory of our WordPress install. You should use the web root specified in your own configuration.

Open your site’s server block file with sudo privileges to begin:
```
sudo nano /etc/nginx/sites-available/wordpress
```
Within the main server block, we need to add a few location blocks.

Start by creating exact-matching location blocks for requests to /favicon.ico and /robots.txt, both of which we do not want to log requests for.

We will use a regular expression location to match any requests for static files. We will again turn off the logging for these requests and will mark them as highly cacheable since these are typically expensive resources to serve. You can adjust this static files list to contain any other file extensions your site may use:
```
/etc/nginx/sites-available/example.com
server {
    . . .

    location = /favicon.ico { log_not_found off; access_log off; }
    location = /robots.txt { log_not_found off; access_log off; allow all; }
    location ~* \.(css|gif|ico|jpeg|jpg|js|png)$ {
        expires max;
        log_not_found off;
    }
    . . .
}
```
Inside of the existing location / block, we need to adjust the try_files list so that instead of returning a 404 error as the default option, control is passed to the index.php file with the request arguments.

This should look something like this:

/etc/nginx/sites-available/example.com
```
server {
    . . .
    location / {
        #try_files $uri $uri/ =404;
        try_files $uri $uri/ /index.php$is_args$args;
    }
    . . .
}
```
When you are finished, save and close the file.

Now, we can check our configuration for syntax errors by typing:

```sudo nginx -t```
If no errors were reported, reload Nginx by typing:

```sudo systemctl reload nginx```
Next, we will download and set up WordPress itself.

## Step 4 — Downloading WordPress
Now that our server software is configured, we can download and set up WordPress. For security reasons in particular, it is always recommended to get the latest version of WordPress from their site.

Change into a writable directory and then download the compressed release by typing:
```
cd /tmp
curl -LO https://wordpress.org/latest.tar.gz
```
Extract the compressed file to create the WordPress directory structure:
```
tar xzvf latest.tar.gz
```
We will be moving these files into our document root momentarily. Before we do that, we can copy over the sample configuration file to the filename that WordPress actually reads:
```
cp /tmp/wordpress/wp-config-sample.php /tmp/wordpress/wp-config.php
```
Now, we can copy the entire contents of the directory into our document root. We are using the -a flag to make sure our permissions are maintained. We are using a dot at the end of our source directory to indicate that everything within the directory should be copied, including any hidden files:

```sudo cp -a /tmp/wordpress/. /var/www/wordpress```
Now that our files are in place, we’ll assign ownership them to the www-data user and group. This is the user and group that Nginx runs as, and Nginx will need to be able to read and write WordPress files in order to serve the website and perform automatic updates.

```sudo chown -R www-data:www-data /var/www/wordpress```
Our files are now in our server’s document root and have the correct ownership, but we still need to complete some more configuration.

## Step 5 — Setting up the WordPress Configuration File
Next, we need to make some changes to the main WordPress configuration file.

When we open the file, our first order of business will be to adjust some secret keys to provide some security for our installation. WordPress provides a secure generator for these values so that you do not have to try to come up with good values on your own. These are only used internally, so it won’t hurt usability to have complex, secure values here.

To grab secure values from the WordPress secret key generator, type:

```curl -s https://api.wordpress.org/secret-key/1.1/salt/```
You will get back unique values that look something like this:

Warning: It is important that you request unique values each time. Do NOT copy the values shown below!
```
Output
define('AUTH_KEY',         '1jl/vqfs<XhdXoAPz9 DO NOT COPY THESE VALUES c_j{iwqD^<+c9.k<J@4H');
define('SECURE_AUTH_KEY',  'E2N-h2]Dcvp+aS/p7X DO NOT COPY THESE VALUES {Ka(f;rv?Pxf})CgLi-3');
define('LOGGED_IN_KEY',    'W(50,{W^,OPB%PB<JF DO NOT COPY THESE VALUES 2;y&,2m%3]R6DUth[;88');
define('NONCE_KEY',        'll,4UC)7ua+8<!4VM+ DO NOT COPY THESE VALUES #`DXF+[$atzM7 o^-C7g');
define('AUTH_SALT',        'koMrurzOA+|L_lG}kf DO NOT COPY THESE VALUES  07VC*Lj*lD&?3w!BT#-');
define('SECURE_AUTH_SALT', 'p32*p,]z%LZ+pAu:VY DO NOT COPY THESE VALUES C-?y+K0DK_+F|0h{!_xY');
define('LOGGED_IN_SALT',   'i^/G2W7!-1H2OQ+t$3 DO NOT COPY THESE VALUES t6**bRVFSD[Hi])-qS`|');
define('NONCE_SALT',       'Q6]U:K?j4L%Z]}h^q7 DO NOT COPY THESE VALUES 1% ^qUswWgn+6&xqHN&%');
```
These are configuration lines that we can paste directly in our configuration file to set secure keys. Copy the output you received now.

Now, open the WordPress configuration file:
```
sudo nvim /var/www/wordpress/wp-config.php
```
Find the section that contains the dummy values for those settings. It will look something like this:

/var/www/wordpress/wp-config.php

. . .
```
define('AUTH_KEY',         'put your unique phrase here');
define('SECURE_AUTH_KEY',  'put your unique phrase here');
define('LOGGED_IN_KEY',    'put your unique phrase here');
define('NONCE_KEY',        'put your unique phrase here');
define('AUTH_SALT',        'put your unique phrase here');
define('SECURE_AUTH_SALT', 'put your unique phrase here');
define('LOGGED_IN_SALT',   'put your unique phrase here');
define('NONCE_SALT',       'put your unique phrase here');
```
. . .
Delete those lines and paste in the values you copied from the command line or browser:

/var/www/wordpress/wp-config.php
. . .
```
define('AUTH_KEY',         'VALUES COPIED FROM THE COMMAND LINE');
define('SECURE_AUTH_KEY',  'VALUES COPIED FROM THE COMMAND LINE');
define('LOGGED_IN_KEY',    'VALUES COPIED FROM THE COMMAND LINE');
define('NONCE_KEY',        'VALUES COPIED FROM THE COMMAND LINE');
define('AUTH_SALT',        'VALUES COPIED FROM THE COMMAND LINE');
define('SECURE_AUTH_SALT', 'VALUES COPIED FROM THE COMMAND LINE');
define('LOGGED_IN_SALT',   'VALUES COPIED FROM THE COMMAND LINE');
define('NONCE_SALT',       'VALUES COPIED FROM THE COMMAND LINE');
```
. . .
Next, we need to modify some of the database connection settings at the beginning of the file. You need to adjust the database name, the database user, and the associated password that we configured within MySQL.

The other change we need to make is to set the method that WordPress should use to write to the filesystem. Since we’ve given the web server permission to write where it needs to, we can explicitly set the filesystem method to “direct”. Failure to set this with our current settings would result in WordPress prompting for FTP credentials when we perform some actions. This setting can be added below the database connection settings, or anywhere else in the file:

/var/www/wordpress/wp-config.php
. . .
```
define('DB_NAME', 'wordpress');

/** MySQL database username */
define('DB_USER', 'wordpressuser');

/** MySQL database password */
define('DB_PASSWORD', 'password');

. . .

define('FS_METHOD', 'direct');
```
Save and close the file when you are finished.

## Step 6 — Completing the Installation Through the Web Interface
Now that the server configuration is complete, we can finish up the installation through the web interface.

In your web browser, navigate to your server’s domain name or public IP address:

http://server_domain_or_IP
Select the language you would like to use:

WordPress language selection

Next, you will come to the main setup page.

Select a name for your WordPress site and choose a username (it is recommended not to choose something like “admin” for security purposes). A strong password is generated automatically. Save this password or select an alternative strong password.

Enter your email address and select whether you want to discourage search engines from indexing your site:

WordPress setup installation

When you click ahead, you will be taken to a page that prompts you to log in:

WordPress login prompt

Once you log in, you will be taken to the WordPress administration dashboard:

WordPress login prompt

# Conclusion {Break}
WordPress should be installed and ready to use! Some common next steps are to choose the permalinks setting for your posts (can be found in Settings > Permalinks) or to select a new theme (in Appearance > Themes). If this is your first time using WordPress, explore the interface a bit to get acquainted with your new CMS.



### You do: Wordpress Admin

- Create at least two posts and two new pages.
- Change the site’s theme.

## WordPress Themes

- We can search for other themes and we are searching the WordPress.org theme repository
- Themeforest.net we can purchase themes and upload them
- Themes live in wp-content/themes in our wordpress folder

### We do:

    $ mkdir wp-content/themes/milky-way
    $ cd wp-contents/themes/milky-way
    $ touch index.php style.css functions.php

#### Bonus
Add a `screenshot.jpg` file with the image of your choosing.

### Header and Footer

```html
<!-- header.php -->
<!doctype html>
<html>
  <head>
    <?php wp_head(); ?>
  </head>
  <body>
```

```html
<!-- index.php -->
<?php get_header(); ?>
<h1>Milky Way</h1>
<?php wp_nav_menu(); ?>
<?php get_footer(); ?>
```

```html
<!-- footer.php -->
  <?php wp_footer(); ?>
  </body>
</html>
```

### CSS & JS

- style.css under the meta data for the theme is where you can add your css

```css
/*
  Theme Name: Milky Way
  Theme URI: http://localhost:8888/
  Description: An out-of-this-world Wordpress theme.
  Author: Jesse Shawl
*/
```

- If you have additional css files, enqueue in the functions.php
- You can create a css and js folder in the root of your theme
- Function: wp_enqueue_style
  - https://codex.wordpress.org/Function_Reference/wp_enqueue_style
- Function: wp_enqueue_script
  - https://codex.wordpress.org/Function_Reference/wp_enqueue_script

```php
// functions.php
<?php
function milky_way_scripts(){
  wp_enqueue_style("styles", get_stylesheet_uri());
  wp_enqueue_script(
    "scripts",
    get_template_directory_uri() ."/js/app.js",
    array("jquery")
  );
}
add_action('wp_enqueue_scripts', 'milky_way_scripts');
?>
```

## What is the WordPress Codex?

- https://codex.wordpress.org/Theme_Development

## The Loop

It checks what is available for that particular page and then displays it.
The loop starts with an if statement, them moves into a while statement
as long as there is content to be displayed. Inside the loop is the HTML
and PHP markup to display what is in the loop.

https://codex.wordpress.org/The_Loop

```html
<!-- index.php -->
<?php if(have_posts()): while(have_posts()): the_post(); ?>
  <article>
    <h2><a href='<?php the_permalink(); ?>'><?php the_title(); ?></a></h2>
    <?php the_content(); ?>
  </article>
<?php endwhile; endif; ?>
```

### Changing Permalinks

Settings > Permalinks

## Plugins

>Plugins are ways to extend and add to the functionality that already exists in WordPress.

https://codex.wordpress.org/Plugins

Plugins are installed in `wp-content/plugins/`

### [Advanced Custom Fields](http://www.advancedcustomfields.com/)

We do: Install the plugin and create a custom field for price

### [Custom Post Type UI](https://wordpress.org/plugins/custom-post-type-ui/)

Custom Post Type UI is often used in conjunction with Advanced Custom Fields.

This is an example of a custom post type: http://www.eachpeachmarket.com/recipes/

You do: Install the custom post type UI plugin, and create a "Product" post type.
Add at least two custom fields.

## More Plugins

1. https://wordpress.org/plugins/shortcodes-ultimate/
2. https://wordpress.org/plugins/w3-total-cache/
3. https://wordpress.org/plugins/contact-form-7/
4. https://wordpress.org/plugins/wordpress-seo/
5. https://wordpress.org/plugins/portfolio-slideshow/
6. https://wordpress.org/plugins/nextgen-gallery/
7. https://wordpress.org/plugins/buddypress/

## Custom Posts and Pages

https://developer.wordpress.org/themes/template-files-section/page-template-files/page-templates/

### Custom Page Templates

#### `page.php`

If a specialized template that includes the page’s ID is not found, WordPress looks for and uses the theme’s default page template.

#### `page-{slug}.php`

If no custom template has been assigned, WordPress looks for and uses a specialized template that contains the page’s slug.

### Global Page Templates

Sometimes you’ll want a template that can be used globally by any page, or by multiple pages.  Some developers will group their templates with a filename prefix, such as page_two-columns.php

To create a global template, write an opening PHP comment at the top of the file that states the template’s name.

```php
// page_two-column.php
<?php /* Template Name: Two Column */ ?>
```

## Reusing the Loop

```
<?php get_template_part('loop'); ?>
```

## Searching, Sorting, and Filtering

### Searching

```html
<!-- index.php -->
<?php get_search_form(); ?>
```

### Sorting

```html
<?php $posts = query_posts( $query_string . "orderby=title&order=ASC"); ?>
// the loop...
```

### Filtering

```html
<?php
  $current_year = date('Y');
  $current_month = date('m');
  query_posts("year=$current_year&monthnum=$current_month&order=ASC" );
?>
// the loop...
```

## Deployment

Lots of shared web hosts offer wordpress hosting for a small monthly fee.

I recommend these hosts:

- https://asmallorange.com/
- https://www.bluehost.com/
- https://www.dreamhost.com/?gclid=CIb4neDwlswCFYEehgodc4gD-Q

You might also want a domain name.

I recommend these registrars:

- https://www.namecheap.com/
- https://iwantmyname.com

It's not necessary to purchase the domain and the hosting from the same company.

If you decide to purchase them separately you'll need to:

### Set domain nameservers

A name server translates domain names into IP addresses. A nameserver hosts
your DNS configuration.

### Update DNS configuration

This is where you configure DNS records. Here's what mine looks like for https://jesse.sh/awl

![](https://dl.dropboxusercontent.com/s/vrlzj9mzu1nt7iw/Screenshot%202016-04-17%2020.05.20.png?dl=0)

The most commonly used records are A and CNAME (alias).

An A record translates a domain or subdomain into an IP address. Possible values
include:

- `@`
  - the domain itself, like jesse.sh
- `*`
  - any subdomain, like anysubdomain.jesse.sh or dabble.jesse.sh
- `www`
  - the subdomain www.jesse.sh (should probably fix this)

The second value is always an IP.

A CNAME translates a domain or subdomain into another domain name. Possible values
include the same as the above.

The second value is always another domain.

## References

- Screencasts
    - https://vimeo.com/151079652
    - https://vimeo.com/151079655
    - https://vimeo.com/151079654

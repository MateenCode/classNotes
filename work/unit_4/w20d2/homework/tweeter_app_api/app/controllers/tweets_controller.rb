class TweetsController < ApplicationController
    def index
        tweets = Tweet.all
        render json: {status: 200, tweets: tweets}
    end

    def show
        tweet = Tweet.find(params[:id])
        render json: {status: 200, tweet: tweet}
    end

    def create
        tweet = Tweet.new(tweet_params) 
    # makes a new tweet using params that was permitted twitter_params method

        # if tweet saves without an error send a status 201 message
        if tweet.save
            render(json: {tweet: tweet}, status: 201)
        else
            # something went wrong
            render(status: 422, json: { tweet: tweet, errors: tweet.errors})
        end
        
    end

    def update
        song = Tweet.find(params[:id]);
        tweet.attributes = tweet_params
        if tweet.changed? && tweet.save
            render(json: { tweet: tweet })
        else 
            render(json: {error: "did not save", "your data": params[:tweet]})
        end
    end

    def destroy 
        tweet = Tweet.find(params[:id])
        tweet.destroy
        if tweet.destroyed?    
            render(status: 204)
        else
            render(json: {"msg": "was not destroyed"})
        end
    end

   



    private

    def tweet_params
        params.required(:tweet).permit(:title, :content, :author)
    end
end
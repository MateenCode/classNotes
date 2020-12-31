class MetaController < ApplicationController
 def about
        tweets = Tweet.all
        render json: { author: "President Kool-chair", last_updated: "10 Jan 2017" }
    end
class SongsController < ApplicationController

    def index
        songs = Song.all
        render json: { status: 200, songs: songs }
    end

    def show
        song = Song.find(params[:id])
        render json: { status: 200, song: song}
    end

    def create
        song = Song.new(song_params)

        if song.save
            render( json: { song: song }, status: 201)
        else
            render(json: { song: song }, status: 422)
        end

    end

    def update
        song = Song.find(params[:id]);
        song.attributes = song_params
        
        if song.changed? && song.save
            render(json: { song: song })
        else 
            render(json: {error: "did not save", "your data": params[:song]})
        end
    end

    
    def destroy 
        song = Song.find(params[:id])
        song.destroy
        if song.destroyed?    
            render(status: 204)
        else
            render(json: {"msg": "was not destroyed"})
        end

    end

    private

    def song_params
        p params
        return params.required(:song).permit(:title, :artist_name, :artwork)
    end

end
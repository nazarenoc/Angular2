import {Component} from 'angular2/core';
import {Config} from './config.service';
import {Video} from './video';
import {VideoListComponent} from './videolist.component';
import {VideoDetailComponent} from './videodetail.component';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    directives: [VideoListComponent, VideoDetailComponent]
})

export class AppComponent { 
    // title = Config.TITLE_PAGE;
    title : string;
    videos : Array<Video>;
    selectedVideo: Video;
    
    constructor(_config:Config) {
        this.title = _config.TITLE_PAGE;
        this.videos = [
            new Video(1, 'Test', 'www.test.com', 'Test description'),
            new Video(2, 'Test 2', 'www.test2.com', 'Test description video 2')
        ]
    }
    
    onSelectVideo(video) {
        // console.log(JSON.stringify(video));
        this.selectedVideo = video;
    }
    
    onCloseDetailForm(event){
        this.selectedVideo = null;
    }
    
    newVideo() {
        var v: Video = new Video(this.videos.length+1, 
                                 "Angular2",
                                 "https://www.youtube.com/watch?v=W14_ZArh6eo", 
                                 "A video classe for angular");
        this.videos.push(v);
        this.selectedVideo = v;
    }
}
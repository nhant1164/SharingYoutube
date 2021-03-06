import React, { Component } from "react";
import YoutubeEmbed from "../../components/Video/YoutubeEmbed/EmbededVideos";
interface Props {
    listVideos: Array<any>;
    userInfo: string;
    isLoggedIn: boolean;
}
interface State {}
class Home extends Component<Props, State> {
    render = () => {
        const { listVideos, userInfo, isLoggedIn } = this.props;
        return (
            <div className="home">
                {listVideos
                    .sort((a, b) => {
                        return Number(a.dateShare) > Number(b.dateShare)
                            ? 1
                            : 0;
                    })
                    .map((video) => {
                        return (
                            <YoutubeEmbed
                                userInfo={userInfo}
                                isLoggedIn={isLoggedIn}
                                video={video}
                            />
                        );
                    })}
            </div>
        );
    };
}

export default Home;

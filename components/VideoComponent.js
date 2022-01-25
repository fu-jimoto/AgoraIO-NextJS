import AgoraRTC from "agora-rtc-sdk-ng";

let rtc = {
    localAudioTrack: null,
    localVideoTrack: null,
    client: null
};

let options = {
    appId: YOUR APP ID,
    channel: "nextjs",
    token: null,
    uid: 123456
};

async function join(){
    rtc.client = AgoraRTC.createClient({ mode: "rtc", codec: "vp8" });
    await rtc.client.join(options.appId, options.channel, options.token, options.uid);
    rtc.localAudioTrack = await AgoraRTC.createMicrophoneAudioTrack();
    rtc.localVideoTrack = await AgoraRTC.createCameraVideoTrack();
    rtc.localVideoTrack.play("local_video");
    await rtc.client.publish([rtc.localAudioTrack, rtc.localVideoTrack]);
}

export function VideoComponent() {
    return (
        <div>
            <h2>Agora Video Web SDK Quickstart Next.js</h2>
            <div>
                <div>
                    <button type="button" id="join" onClick={() => join()} >JOIN</button>
                </div>
                <div id="local_video" style={{width: '320px', height: '240px'}}></div>
            </div>
        </div>
    )
}

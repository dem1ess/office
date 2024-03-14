import { useState, useEffect, useRef } from 'react';

const CameraComponent = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const photoRef = useRef<HTMLCanvasElement | null>(null);
    const [hasPhoto, setHasPhoto] = useState<boolean>(false);

    const getVideo = () => {
        navigator.mediaDevices.getUserMedia({
            video: { width: 1920, height: 1080 }
        })
            .then((stream) => {
                const video = videoRef!.current;
                if (!video) return;
                video.srcObject = stream;
                video.play();
            })
            .catch((err) => {
                console.error("error:", err);
            });
    };

    const takePhoto = () => {
        const width = 414;
        const height = width / (16/9);

        const video = videoRef?.current;
        const photo = photoRef?.current;
        const ctx = photo?.getContext('2d');

        if (!video || !photo) return;

        photo.width = width;
        photo.height = height;


        if (!ctx) return;

        ctx.drawImage(video, 0, 0, width, height);
        setHasPhoto(true);
    };

    const closePhoto = () => {
        const video = videoRef.current;
        const photo = photoRef.current;

        if (!video || !photo) return;

        const stream = video.srcObject;
        if (!stream) return;


        // @ts-ignore
        const tracks = stream.getTracks();
            //@typescript-eslint/no-explicit-any
        tracks.forEach(function(track: any) {
            track.stop();
        });

        video.srcObject = null;
        setHasPhoto(false);
    };

    useEffect(() => {
        getVideo();
    }, [videoRef]);

    return (
        <div className="flex flex-col items-center justify-center p-4">
            <div className="relative">
                <video ref={videoRef} className="block max-w-full rounded-lg shadow-lg"/>
                {hasPhoto && (
                    <canvas ref={photoRef} className="absolute top-0 left-0 hidden"/>
                )}
            </div>
            <div className="mt-4 space-x-2">
                <button
                    onClick={takePhoto}
                    className="px-6 py-3 text-white  bg-cyan-500 rounded hover:bg-cyan-600 focus:outline-none"
                >
                    Take photo
                </button>
                {hasPhoto && (
                    <button
                        onClick={closePhoto}
                        className="px-4 py-2 text-white bg-red-500 rounded hover:bg-red-600 focus:outline-none"
                    >
                        Retake
                    </button>
                )}
            </div>
        </div>
    );
};

export default CameraComponent;
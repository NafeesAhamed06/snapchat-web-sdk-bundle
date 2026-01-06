import { bootstrapCameraKit } from "@snap/camera-kit";

window.initSnapCamera = async function (options) {
  const { apiToken, lensId, lensGroupId, videoElement } = options;

  const cameraKit = await bootstrapCameraKit({ apiToken });

  const session = await cameraKit.createSession({ liveRenderTarget: videoElement });
  const mediaStream = await navigator.mediaDevices.getUserMedia({ video: true });

  await session.setSource(mediaStream);
  await session.play();

  if(lensId){
    const lens = await cameraKit.lensRepository.loadLens(lensId, lensGroupId);
    await session.applyLens(lens);
  }

  return {
    cameraKit,
    session
  };
};

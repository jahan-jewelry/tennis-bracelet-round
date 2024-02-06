import {
    ViewerApp,
    AssetManagerPlugin,
    GBufferPlugin,
    timeout,
    ProgressivePlugin,
    TonemapPlugin,
    SSRPlugin,
    SSAOPlugin,
    DiamondPlugin,
    FrameFadePlugin,
    GLTFAnimationPlugin,
    GroundPlugin,
    BloomPlugin,
    TemporalAAPlugin,
    AnisotropyPlugin,
    GammaCorrectionPlugin,
    VariationConfiguratorPlugin,
    

    addBasePlugins,
    ITexture, TweakpaneUiPlugin, AssetManagerBasicPopupPlugin, CanvasSnipperPlugin,

    IViewerPlugin, FileTransferPlugin,

    // Color, // Import THREE.js internals
    // Texture, // Import THREE.js internals
} from "webgi";
import "./styles.css";

async function setupViewer(){

    // Initialize the viewer
    const viewer = new ViewerApp({
        canvas: document.getElementById('webgi-canvas') as HTMLCanvasElement,
        isAntialiased: false,
        scale: 2,
    })

    // Add some plugins
    const manager = await viewer.addPlugin(AssetManagerPlugin)

    // Add plugins individually.
    // await viewer.addPlugin(GBufferPlugin)
    // await viewer.addPlugin(new ProgressivePlugin(32))
    // await viewer.addPlugin(new TonemapPlugin(!viewer.useRgbm))
    // await viewer.addPlugin(GammaCorrectionPlugin)
    // await viewer.addPlugin(SSRPlugin)
    // await viewer.addPlugin(SSAOPlugin)
    // await viewer.addPlugin(DiamondPlugin)
    // await viewer.addPlugin(FrameFadePlugin)
    // await viewer.addPlugin(GLTFAnimationPlugin)
    // await viewer.addPlugin(GroundPlugin)
    // await viewer.addPlugin(BloomPlugin)
    // await viewer.addPlugin(TemporalAAPlugin)
    // await viewer.addPlugin(AnisotropyPlugin)
    // and many more...

    // or use this to add all main ones at once.
    await addBasePlugins(viewer) // check the source: https://codepen.io/repalash/pen/JjLxGmy for the list of plugins added.

    // Add a popup(in HTML) with download progress when any asset is downloading.
    //await viewer.addPlugin(AssetManagerBasicPopupPlugin)

    // Required for downloading files from the UI
    await viewer.addPlugin(FileTransferPlugin)

    // Add more plugins not available in base, like CanvasSnipperPlugin which has helpers to download an image of the canvas.
    await viewer.addPlugin(CanvasSnipperPlugin)

    // Import and add a GLB file.
    await viewer.load("./assets/BraceletOptions.glb")





    // Add VariationConfiguratorPlugin YOU SHOULD DELETE THIS IF THIS DOES NOT WORK
    
    const config = await viewer.addPlugin(VariationConfiguratorPlugin);
    await config.importPath("./assets/config.json");
    const variations = config.variations;
    const objects = variations.objects;
    const materials = variations.materials;
    const object = objects[0];
    const material = materials[0];
    const category = config.variations.objects[0]
    config.applyVariation(category , 0 , 'objects' );

    document.querySelectorAll(".object").forEach((el) => {
      el.addEventListener("click", () => {
        const category = config.variations.objects.find((cat) => cat.name === el.getAttribute("data-category"));
        const index = parseInt(el.getAttribute("data-index"));
        const type = "objects";
  
        config.applyVariation(category, index, type);
      });
    });

    document.querySelectorAll(".material").forEach((el) => {
        el.addEventListener("click", () => {
          const category = config.variations.materials.find((cat) => cat.name === el.getAttribute("data-category"));
          const index = parseInt(el.getAttribute("data-index"));
          const type = "materials";
          
          config.applyVariation(category, index, type);
        });
      });


    // END //

    

    // Load an environment map if not set in the glb file
    // await viewer.setEnvironmentMap("./assets/environment.hdr");

}

setupViewer()

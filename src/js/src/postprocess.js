let dynamic_hdr_effect_composer;

function init_postprocess( renderer ){
    let hdr_render_target = new THREE.WebGLRenderTarget(WINDOW_WIDTH, WINDOW_HEIGHT);
    
    dynamic_hdr_effect_composer = new THREE.EffectComposer(renderer, hdr_render_target);
    // add all the passes
    dynamic_hdr_effect_composer.addPass( adapt_tone_mapping_pass );
    dynamic_hdr_effect_composer.addPass( bloom_pass );
    dynamic_hdr_effect_composer.addPass( gamma_correction_pass );
}
#![no_main]

use flatgeobuf::*;
use libfuzzer_sys::fuzz_target;

fuzz_target!(|data: &[u8]| {
    let feature = match root_as_feature(data) {
        Ok(feature) => feature,
        Err(_) => return,
    };
    let _ = feature.geometry();
    let _ = match feature.properties() {
        Some(n) => n,
        None => return,
    };
});

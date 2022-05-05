#![no_main]

use libfuzzer_sys::fuzz_target;
use flatgeobuf::*;
use flatgeobuf::FgbReader;
use std::io;


fuzz_target!(|data: &[u8]| {
    let mut buf_reader = io::BufReader::new(io::Cursor::new(data));
    let fgb = match FgbReader::open(&mut buf_reader) {
        Ok(n) => n,
        Err(_) => return,
    };
    let mut fgb = match fgb.select_all() {
        Ok(n) => n,
        Err(_) => return,
    };
    let _ = fgb.header();
    //fgb should be Result<FgbReader<'a, R, Open>>
    while let Ok(Some(_feature)) = fgb.next() {}
});

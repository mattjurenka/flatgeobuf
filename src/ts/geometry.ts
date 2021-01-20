// automatically generated by the FlatBuffers compiler, do not modify

import * as flatbuffers from './flatbuffers/flatbuffers';

import { GeometryType } from './geometry-type';


/**
 * @constructor
 */
export class Geometry {
  /**
   * @type flatbuffers.ByteBuffer
   */
  bb: flatbuffers.ByteBuffer|null = null;

  /**
   * @type number
   */
  bb_pos = 0;
/**
 * @param number i
 * @param flatbuffers.ByteBuffer bb
 * @returns Geometry
 */
__init(i:number, bb:flatbuffers.ByteBuffer):Geometry {
  this.bb_pos = i;
  this.bb = bb;
  return this;
}

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Geometry= obj
 * @returns Geometry
 */
static getRootAsGeometry(bb:flatbuffers.ByteBuffer, obj?:Geometry):Geometry {
  return (obj || new Geometry()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * @param flatbuffers.ByteBuffer bb
 * @param Geometry= obj
 * @returns Geometry
 */
static getSizePrefixedRootAsGeometry(bb:flatbuffers.ByteBuffer, obj?:Geometry):Geometry {
  bb.setPosition(bb.position() + flatbuffers.SIZE_PREFIX_LENGTH);
  return (obj || new Geometry()).__init(bb.readInt32(bb.position()) + bb.position(), bb);
}

/**
 * @param number index
 * @returns number
 */
ends(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.readUint32(this.bb!.__vector(this.bb_pos + offset) + index * 4) : 0;
}

/**
 * @returns number
 */
endsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * @returns Uint32Array
 */
endsArray():Uint32Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 4);
  return offset ? new Uint32Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

/**
 * @param number index
 * @returns number
 */
xy(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
}

/**
 * @returns number
 */
xyLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * @returns Float64Array
 */
xyArray():Float64Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 6);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

/**
 * @param number index
 * @returns number
 */
z(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
}

/**
 * @returns number
 */
zLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * @returns Float64Array
 */
zArray():Float64Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 8);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

/**
 * @param number index
 * @returns number
 */
m(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
}

/**
 * @returns number
 */
mLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * @returns Float64Array
 */
mArray():Float64Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 10);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

/**
 * @param number index
 * @returns number
 */
t(index: number):number|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.readFloat64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : 0;
}

/**
 * @returns number
 */
tLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * @returns Float64Array
 */
tArray():Float64Array|null {
  const offset = this.bb!.__offset(this.bb_pos, 12);
  return offset ? new Float64Array(this.bb!.bytes().buffer, this.bb!.bytes().byteOffset + this.bb!.__vector(this.bb_pos + offset), this.bb!.__vector_len(this.bb_pos + offset)) : null;
}

/**
 * @param number index
 * @returns flatbuffers.Long
 */
tm(index: number):flatbuffers.Long|null {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.readUint64(this.bb!.__vector(this.bb_pos + offset) + index * 8) : this.bb!.createLong(0, 0);
}

/**
 * @returns number
 */
tmLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 14);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * @returns GeometryType
 */
type():GeometryType {
  const offset = this.bb!.__offset(this.bb_pos, 16);
  return offset ? /** @type GeometryType */ (this.bb!.readUint8(this.bb_pos + offset)) : GeometryType.Unknown;
}

/**
 * @param number index
 * @param Geometry= obj
 * @returns Geometry
 */
parts(index: number, obj?:Geometry):Geometry|null {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? (obj || new Geometry()).__init(this.bb!.__indirect(this.bb!.__vector(this.bb_pos + offset) + index * 4), this.bb!) : null;
}

/**
 * @returns number
 */
partsLength():number {
  const offset = this.bb!.__offset(this.bb_pos, 18);
  return offset ? this.bb!.__vector_len(this.bb_pos + offset) : 0;
}

/**
 * @param flatbuffers.Builder builder
 */
static startGeometry(builder:flatbuffers.Builder) {
  builder.startObject(8);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset endsOffset
 */
static addEnds(builder:flatbuffers.Builder, endsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(0, endsOffset, 0);
}

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createEndsVector(builder:flatbuffers.Builder, data:number[]|Uint32Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createEndsVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createEndsVector(builder:flatbuffers.Builder, data:number[]|Uint32Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt32(data[i]);
  }
  return builder.endVector();
}

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startEndsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset xyOffset
 */
static addXy(builder:flatbuffers.Builder, xyOffset:flatbuffers.Offset) {
  builder.addFieldOffset(1, xyOffset, 0);
}

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createXyVector(builder:flatbuffers.Builder, data:number[]|Float64Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createXyVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createXyVector(builder:flatbuffers.Builder, data:number[]|Float64Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]);
  }
  return builder.endVector();
}

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startXyVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset zOffset
 */
static addZ(builder:flatbuffers.Builder, zOffset:flatbuffers.Offset) {
  builder.addFieldOffset(2, zOffset, 0);
}

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createZVector(builder:flatbuffers.Builder, data:number[]|Float64Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createZVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createZVector(builder:flatbuffers.Builder, data:number[]|Float64Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]);
  }
  return builder.endVector();
}

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startZVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset mOffset
 */
static addM(builder:flatbuffers.Builder, mOffset:flatbuffers.Offset) {
  builder.addFieldOffset(3, mOffset, 0);
}

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createMVector(builder:flatbuffers.Builder, data:number[]|Float64Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createMVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createMVector(builder:flatbuffers.Builder, data:number[]|Float64Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]);
  }
  return builder.endVector();
}

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startMVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset tOffset
 */
static addT(builder:flatbuffers.Builder, tOffset:flatbuffers.Offset) {
  builder.addFieldOffset(4, tOffset, 0);
}

/**
 * @param flatbuffers.Builder builder
 * @param Array.<number> data
 * @returns flatbuffers.Offset
 */
static createTVector(builder:flatbuffers.Builder, data:number[]|Float64Array):flatbuffers.Offset;
/**
 * @deprecated This Uint8Array overload will be removed in the future.
 */
static createTVector(builder:flatbuffers.Builder, data:number[]|Uint8Array):flatbuffers.Offset;
static createTVector(builder:flatbuffers.Builder, data:number[]|Float64Array|Uint8Array):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addFloat64(data[i]);
  }
  return builder.endVector();
}

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startTVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset tmOffset
 */
static addTm(builder:flatbuffers.Builder, tmOffset:flatbuffers.Offset) {
  builder.addFieldOffset(5, tmOffset, 0);
}

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Long> data
 * @returns flatbuffers.Offset
 */
static createTmVector(builder:flatbuffers.Builder, data:flatbuffers.Long[]):flatbuffers.Offset {
  builder.startVector(8, data.length, 8);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addInt64(data[i]);
  }
  return builder.endVector();
}

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startTmVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(8, numElems, 8);
}

/**
 * @param flatbuffers.Builder builder
 * @param GeometryType type
 */
static addType(builder:flatbuffers.Builder, type:GeometryType) {
  builder.addFieldInt8(6, type, GeometryType.Unknown);
}

/**
 * @param flatbuffers.Builder builder
 * @param flatbuffers.Offset partsOffset
 */
static addParts(builder:flatbuffers.Builder, partsOffset:flatbuffers.Offset) {
  builder.addFieldOffset(7, partsOffset, 0);
}

/**
 * @param flatbuffers.Builder builder
 * @param Array.<flatbuffers.Offset> data
 * @returns flatbuffers.Offset
 */
static createPartsVector(builder:flatbuffers.Builder, data:flatbuffers.Offset[]):flatbuffers.Offset {
  builder.startVector(4, data.length, 4);
  for (let i = data.length - 1; i >= 0; i--) {
    builder.addOffset(data[i]);
  }
  return builder.endVector();
}

/**
 * @param flatbuffers.Builder builder
 * @param number numElems
 */
static startPartsVector(builder:flatbuffers.Builder, numElems:number) {
  builder.startVector(4, numElems, 4);
}

/**
 * @param flatbuffers.Builder builder
 * @returns flatbuffers.Offset
 */
static endGeometry(builder:flatbuffers.Builder):flatbuffers.Offset {
  const offset = builder.endObject();
  return offset;
}

static createGeometry(builder:flatbuffers.Builder, endsOffset:flatbuffers.Offset, xyOffset:flatbuffers.Offset, zOffset:flatbuffers.Offset, mOffset:flatbuffers.Offset, tOffset:flatbuffers.Offset, tmOffset:flatbuffers.Offset, type:GeometryType, partsOffset:flatbuffers.Offset):flatbuffers.Offset {
  Geometry.startGeometry(builder);
  Geometry.addEnds(builder, endsOffset);
  Geometry.addXy(builder, xyOffset);
  Geometry.addZ(builder, zOffset);
  Geometry.addM(builder, mOffset);
  Geometry.addT(builder, tOffset);
  Geometry.addTm(builder, tmOffset);
  Geometry.addType(builder, type);
  Geometry.addParts(builder, partsOffset);
  return Geometry.endGeometry(builder);
}
}

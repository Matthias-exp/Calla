import { CubeMapFace } from "../graphics2d/CubeMapFace";
import type { InterpolationType } from "../graphics2d/InterpolationType";
import { CanvasTypes, MemoryImageTypes } from "../html/canvas";
import type { progressCallback } from "../tasks/progressCallback";
import { getPartsReturnType } from "./getPartsReturnType";
import { IFetcher } from "./IFetcher";
export declare class Fetcher implements IFetcher {
    constructor();
    private getResponse;
    private postObjectForResponse;
    private readRequestResponse;
    private readResponseBuffer;
    private readFileImage;
    protected _getBuffer(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<getPartsReturnType>;
    getBuffer(path: string): Promise<getPartsReturnType>;
    getBuffer(path: string, onProgress?: progressCallback): Promise<getPartsReturnType>;
    getBuffer(path: string, headerMap?: Map<string, string>): Promise<getPartsReturnType>;
    getBuffer(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<getPartsReturnType>;
    protected _postObjectForBuffer<T>(path: string, obj: T, headerMap?: progressCallback | Map<string, string>, onProgress?: progressCallback): Promise<getPartsReturnType>;
    postObjectForBuffer<T>(path: string, obj: T): Promise<getPartsReturnType>;
    postObjectForBuffer<T>(path: string, obj: T, onProgress?: progressCallback): Promise<getPartsReturnType>;
    postObjectForBuffer<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<getPartsReturnType>;
    postObjectForBuffer<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<getPartsReturnType>;
    protected _getBlob(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<Blob>;
    getBlob(path: string): Promise<Blob>;
    getBlob(path: string, onProgress?: progressCallback): Promise<Blob>;
    getBlob(path: string, headerMap?: Map<string, string>): Promise<Blob>;
    getBlob(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<Blob>;
    protected _postObjectForBlob<T>(path: string, obj: T, headerMap?: progressCallback | Map<string, string>, onProgress?: progressCallback): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T, onProgress?: progressCallback): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<Blob>;
    postObjectForBlob<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<Blob>;
    protected _getFile(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<string>;
    getFile(path: string): Promise<string>;
    getFile(path: string, onProgress?: progressCallback): Promise<string>;
    getFile(path: string, headerMap?: Map<string, string>): Promise<string>;
    getFile(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;
    protected _postObjectForFile<T>(path: string, obj: T, headerMap?: progressCallback | Map<string, string>, onProgress?: progressCallback): Promise<string>;
    postObjectForFile<T>(path: string, obj: T): Promise<string>;
    postObjectForFile<T>(path: string, obj: T, onProgress?: progressCallback): Promise<string>;
    postObjectForFile<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<string>;
    postObjectForFile<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;
    protected _getImageBitmap(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<ImageBitmap>;
    getImageBitmap(path: string): Promise<ImageBitmap>;
    getImageBitmap(path: string, onProgress?: progressCallback): Promise<ImageBitmap>;
    getImageBitmap(path: string, headerMap?: Map<string, string>): Promise<ImageBitmap>;
    getImageBitmap(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<ImageBitmap>;
    protected _getImage(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<HTMLImageElement>;
    getImage(path: string): Promise<HTMLImageElement>;
    getImage(path: string, onProgress?: progressCallback): Promise<HTMLImageElement>;
    getImage(path: string, headerMap?: Map<string, string>): Promise<HTMLImageElement>;
    getImage(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<HTMLImageElement>;
    protected _postObjectForImageBitmap<T>(path: string, obj: T, headerMap?: progressCallback | Map<string, string>, onProgress?: progressCallback): Promise<ImageBitmap>;
    postObjectForImageBitmap<T>(path: string, obj: T): Promise<ImageBitmap>;
    postObjectForImageBitmap<T>(path: string, obj: T, onProgress?: progressCallback): Promise<ImageBitmap>;
    postObjectForImageBitmap<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<ImageBitmap>;
    postObjectForImageBitmap<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<ImageBitmap>;
    protected _postObjectForImage<T>(path: string, obj: T, headerMap?: progressCallback | Map<string, string>, onProgress?: progressCallback): Promise<HTMLImageElement>;
    postObjectForImage<T>(path: string, obj: T): Promise<HTMLImageElement>;
    postObjectForImage<T>(path: string, obj: T, onProgress?: progressCallback): Promise<HTMLImageElement>;
    postObjectForImage<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<HTMLImageElement>;
    postObjectForImage<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<HTMLImageElement>;
    private _getCanvasViaImageBitmap;
    private _getCanvasViaImage;
    private readImageData;
    private _getImageDataViaImageBitmap;
    private _getImageDataViaImage;
    _getCubesViaImageBitmaps(path: string, headerMap?: progressCallback | Map<string, string>, onProgress?: progressCallback): Promise<ImageBitmap[]>;
    private _getCubesViaImage;
    private _getEquiMapViaImageBitmaps;
    private _getEquiMapViaImage;
    private readBufferText;
    protected _getText(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<string>;
    getText(path: string): Promise<string>;
    getText(path: string, onProgress?: progressCallback): Promise<string>;
    getText(path: string, headerMap?: Map<string, string>): Promise<string>;
    getText(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;
    private _postObjectForText;
    postObjectForText<T>(path: string, obj: T): Promise<string>;
    postObjectForText<T>(path: string, obj: T, onProgress?: progressCallback): Promise<string>;
    postObjectForText<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<string>;
    postObjectForText<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<string>;
    protected _getObject<T>(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<T>;
    getObject<T>(path: string): Promise<T>;
    getObject<T>(path: string, onProgress?: progressCallback): Promise<T>;
    getObject<T>(path: string, headerMap?: Map<string, string>): Promise<T>;
    getObject<T>(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<T>;
    protected _postObjectForObject<T, U>(path: string, obj: T, headerMap?: progressCallback | Map<string, string>, onProgress?: progressCallback): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T, onProgress?: progressCallback): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T, headerMap?: Map<string, string>): Promise<U>;
    postObjectForObject<T, U>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<U>;
    postObject<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<void>;
    private readTextXml;
    protected _getXml(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<HTMLElement>;
    getXml(path: string): Promise<HTMLElement>;
    getXml(path: string, onProgress?: progressCallback): Promise<HTMLElement>;
    getXml(path: string, headerMap?: Map<string, string>): Promise<HTMLElement>;
    getXml(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T, onProgress?: progressCallback): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<HTMLElement>;
    postObjectForXml<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<HTMLElement>;
    loadScript(path: string, test: () => boolean, onProgress?: progressCallback): Promise<void>;
    private __getCanvas;
    protected _getCanvas(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<CanvasTypes>;
    getCanvas(path: string): Promise<CanvasTypes>;
    getCanvas(path: string, onProgress?: progressCallback): Promise<CanvasTypes>;
    getCanvas(path: string, headerMap?: Map<string, string>): Promise<CanvasTypes>;
    getCanvas(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<CanvasTypes>;
    private __getImageData;
    protected _getImageData(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<ImageData>;
    getImageData(path: string): Promise<ImageData>;
    getImageData(path: string, onProgress?: progressCallback): Promise<ImageData>;
    getImageData(path: string, headerMap?: Map<string, string>): Promise<ImageData>;
    getImageData(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<ImageData>;
    private __getCubes;
    protected _getCubes(path: string, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<MemoryImageTypes[]>;
    getCubes(path: string): Promise<MemoryImageTypes[]>;
    getCubes(path: string, onProgress?: progressCallback): Promise<MemoryImageTypes[]>;
    getCubes(path: string, headerMap?: Map<string, string>): Promise<MemoryImageTypes[]>;
    getCubes(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<MemoryImageTypes[]>;
    private __getEquiMaps;
    protected _getEquiMaps(path: string, interpolation: InterpolationType, maxWidth: number, headerMap?: Map<string, string> | progressCallback, onProgress?: progressCallback): Promise<MemoryImageTypes[]>;
    getEquiMaps(path: string, interpolation: InterpolationType, maxWidth: number): Promise<MemoryImageTypes[]>;
    getEquiMaps(path: string, interpolation: InterpolationType, maxWidth: number, onProgress?: progressCallback): Promise<MemoryImageTypes[]>;
    getEquiMaps(path: string, interpolation: InterpolationType, maxWidth: number, headerMap?: Map<string, string>): Promise<MemoryImageTypes[]>;
    getEquiMaps(path: string, interpolation: InterpolationType, maxWidth: number, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<MemoryImageTypes[]>;
    renderImageBitmapFace(readData: ImageData, faceName: CubeMapFace, interpolation: InterpolationType, maxWidth: number, onProgress?: progressCallback): Promise<ImageBitmap>;
}

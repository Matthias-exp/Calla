import type { InterpolationType } from "../graphics2d/InterpolationType";
import type { CanvasTypes, MemoryImageTypes } from "../html/canvas";
import type { progressCallback } from "../tasks/progressCallback";
import { IFetcher } from "./IFetcher";

export interface IImageFetcher extends IFetcher {
    getImageBitmap(path: string): Promise<ImageBitmap>;
    getImageBitmap(path: string, onProgress?: progressCallback): Promise<ImageBitmap>;
    getImageBitmap(path: string, headerMap?: Map<string, string>): Promise<ImageBitmap>;
    getImageBitmap(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<ImageBitmap>;


    getImage(path: string): Promise<HTMLImageElement>;
    getImage(path: string, onProgress?: progressCallback): Promise<HTMLImageElement>;
    getImage(path: string, headerMap?: Map<string, string>): Promise<HTMLImageElement>;
    getImage(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<HTMLImageElement>;

    postObjectForImageBitmap<T>(path: string, obj: T): Promise<ImageBitmap>;
    postObjectForImageBitmap<T>(path: string, obj: T, onProgress?: progressCallback): Promise<ImageBitmap>;
    postObjectForImageBitmap<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<ImageBitmap>;
    postObjectForImageBitmap<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<ImageBitmap>;

    postObjectForImage<T>(path: string, obj: T): Promise<HTMLImageElement>;
    postObjectForImage<T>(path: string, obj: T, onProgress?: progressCallback): Promise<HTMLImageElement>;
    postObjectForImage<T>(path: string, obj: T, headerMap?: Map<string, string>): Promise<HTMLImageElement>;
    postObjectForImage<T>(path: string, obj: T, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<HTMLImageElement>;

    getCanvas(path: string): Promise<CanvasTypes>;
    getCanvas(path: string, onProgress?: progressCallback): Promise<CanvasTypes>;
    getCanvas(path: string, headerMap?: Map<string, string>): Promise<CanvasTypes>;
    getCanvas(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<CanvasTypes>;

    getImageData(path: string): Promise<ImageData>;
    getImageData(path: string, onProgress?: progressCallback): Promise<ImageData>;
    getImageData(path: string, headerMap?: Map<string, string>): Promise<ImageData>;
    getImageData(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<ImageData>;

    getCubes(path: string): Promise<MemoryImageTypes[]>;
    getCubes(path: string, onProgress?: progressCallback): Promise<MemoryImageTypes[]>;
    getCubes(path: string, headerMap?: Map<string, string>): Promise<MemoryImageTypes[]>;
    getCubes(path: string, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<MemoryImageTypes[]>;

    getEquiMaps(path: string, interpolation: InterpolationType, maxWidth: number): Promise<MemoryImageTypes[]>;
    getEquiMaps(path: string, interpolation: InterpolationType, maxWidth: number, onProgress?: progressCallback): Promise<MemoryImageTypes[]>;
    getEquiMaps(path: string, interpolation: InterpolationType, maxWidth: number, headerMap?: Map<string, string>): Promise<MemoryImageTypes[]>;
    getEquiMaps(path: string, interpolation: InterpolationType, maxWidth: number, headerMap?: Map<string, string>, onProgress?: progressCallback): Promise<MemoryImageTypes[]>;
}
// WebGPU Type Definitions
interface Navigator {
  gpu?: GPU;
}

interface GPU {
  requestAdapter(options?: GPURequestAdapterOptions): Promise<GPUAdapter | null>;
  getPreferredCanvasFormat(): GPUTextureFormat;
}

interface GPUAdapter {
  requestDevice(descriptor?: GPUDeviceDescriptor): Promise<GPUDevice>;
}

interface GPUDevice {
  queue: GPUQueue;
  createShaderModule(descriptor: GPUShaderModuleDescriptor): GPUShaderModule;
  createBuffer(descriptor: GPUBufferDescriptor): GPUBuffer;
  createRenderPipeline(descriptor: GPURenderPipelineDescriptor): GPURenderPipeline;
  createBindGroup(descriptor: GPUBindGroupDescriptor): GPUBindGroup;
  createCommandEncoder(descriptor?: GPUCommandEncoderDescriptor): GPUCommandEncoder;
}

interface GPUQueue {
  submit(commandBuffers: GPUCommandBuffer[]): void;
  writeBuffer(buffer: GPUBuffer, bufferOffset: number, data: ArrayBuffer | ArrayBufferView, dataOffset?: number, size?: number): void;
}

interface GPUBuffer {
  getMappedRange(offset?: number, size?: number): ArrayBuffer;
  unmap(): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPUShaderModule {}

interface GPURenderPipeline {
  getBindGroupLayout(index: number): GPUBindGroupLayout;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPUBindGroup {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPUBindGroupLayout {}

interface GPUCanvasContext {
  configure(configuration: GPUCanvasConfiguration): void;
  getCurrentTexture(): GPUTexture;
}

interface GPUTexture {
  createView(descriptor?: GPUTextureViewDescriptor): GPUTextureView;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPUTextureView {}

interface GPUCommandEncoder {
  beginRenderPass(descriptor: GPURenderPassDescriptor): GPURenderPassEncoder;
  finish(descriptor?: GPUCommandBufferDescriptor): GPUCommandBuffer;
}

interface GPURenderPassEncoder {
  setPipeline(pipeline: GPURenderPipeline): void;
  setBindGroup(index: number, bindGroup: GPUBindGroup): void;
  setVertexBuffer(slot: number, buffer: GPUBuffer, offset?: number, size?: number): void;
  draw(vertexCount: number, instanceCount?: number, firstVertex?: number, firstInstance?: number): void;
  end(): void;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPUCommandBuffer {}

// Descriptors
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPURequestAdapterOptions {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPUDeviceDescriptor {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPUCommandEncoderDescriptor {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPUCommandBufferDescriptor {}
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPUTextureViewDescriptor {}

interface GPUShaderModuleDescriptor {
  code: string;
}

interface GPUBufferDescriptor {
  size: number;
  usage: number;
  mappedAtCreation?: boolean;
}

interface GPURenderPipelineDescriptor {
  layout: 'auto' | GPUPipelineLayout;
  vertex: GPUVertexState;
  fragment?: GPUFragmentState;
  primitive?: GPUPrimitiveState;
}

interface GPUVertexState {
  module: GPUShaderModule;
  entryPoint: string;
  buffers?: GPUVertexBufferLayout[];
}

interface GPUFragmentState {
  module: GPUShaderModule;
  entryPoint: string;
  targets: GPUColorTargetState[];
}

interface GPUPrimitiveState {
  topology?: GPUPrimitiveTopology;
}

interface GPUColorTargetState {
  format: GPUTextureFormat;
}

interface GPUVertexBufferLayout {
  arrayStride: number;
  attributes: GPUVertexAttribute[];
}

interface GPUVertexAttribute {
  format: GPUVertexFormat;
  offset: number;
  shaderLocation: number;
}

interface GPUBindGroupDescriptor {
  layout: GPUBindGroupLayout;
  entries: GPUBindGroupEntry[];
}

interface GPUBindGroupEntry {
  binding: number;
  resource: GPUBindingResource;
}

interface GPUBufferBinding {
  buffer: GPUBuffer;
  offset?: number;
  size?: number;
}

type GPUBindingResource = GPUBufferBinding | { buffer: GPUBuffer };

interface GPUCanvasConfiguration {
  device: GPUDevice;
  format: GPUTextureFormat;
}

interface GPURenderPassDescriptor {
  colorAttachments: (GPURenderPassColorAttachment | null)[];
  depthStencilAttachment?: GPURenderPassDepthStencilAttachment;
}

interface GPURenderPassColorAttachment {
  view: GPUTextureView;
  clearValue?: GPUColor;
  loadOp: GPULoadOp;
  storeOp: GPUStoreOp;
}

interface GPURenderPassDepthStencilAttachment {
  view: GPUTextureView;
}

interface GPUColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface GPUPipelineLayout {}

// Enums
type GPUTextureFormat = string;
type GPUPrimitiveTopology = 'triangle-list' | 'triangle-strip' | 'line-list' | 'line-strip' | 'point-list';
type GPUVertexFormat = 'float32x2' | 'float32x3' | 'float32x4';
type GPULoadOp = 'clear' | 'load';
type GPUStoreOp = 'store' | 'discard';

// Buffer usage flags
declare const GPUBufferUsage: {
  MAP_READ: number;
  MAP_WRITE: number;
  COPY_SRC: number;
  COPY_DST: number;
  INDEX: number;
  VERTEX: number;
  UNIFORM: number;
  STORAGE: number;
  INDIRECT: number;
  QUERY_RESOLVE: number;
};
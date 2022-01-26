declare var __VERSION__: string;
interface ImportMetaEnv {
  readonly V_PATH: string;
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
  readonly glob: any;
}

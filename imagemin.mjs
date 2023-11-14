import keepFolder from 'imagemin-keep-folder';
import mozjpeg from 'imagemin-mozjpeg';
import pngquant from 'imagemin-pngquant';
import gifsicle from 'imagemin-gifsicle';
import svgo from 'imagemin-svgo';
import imageminWebp from 'imagemin-webp';

const srcImg = './src/img/**/*.{jpg,jpeg,png,gif,svg,ico}';
const webpTarget = './dist/assets/img/**/*';
const webpOutput = true;

const convertWebp = (targetFiles) => {
  keepFolder([targetFiles], {
    use: [imageminWebp({ quality: 50 })],
    replaceOutputDir: output => {
      const pathArray = output.split('/');
      pathArray.splice(-1, 0, 'webp');
      const outputPath = pathArray.join('/');
      return outputPath
    }
  });
};

keepFolder([srcImg], {
  plugins: [
    mozjpeg({
      quality: 85,
      progressive: true,
    }),
    pngquant({
      quality: [0.7, 0.85],
    }),
    gifsicle(),
    svgo({
      removeViewBox: false,
      removeMetadata: false,
      removeUnknownsAndDefaults: false,
      convertShapeToPath: false,
      collapseGroups: false,
      cleanupIDs: false
    })
  ],
  replaceOutputDir: output => {
    return output.replace(/img\//, '../dist/assets/img/');
  }
}).then(() => {
  if(webpOutput) {
    convertWebp(webpTarget);
  }
  console.log('Images optimized');
});

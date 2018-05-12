module.exports = {
  callMe: () => {
    console.log('Called the exported function:', MY_GLOBAL);
    console.log('Have document?', !!document);
  }
};

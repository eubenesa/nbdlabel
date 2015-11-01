module.exports = function(deployTarget) {  
  return {
    pagefront: {
      app: 'nbdlabel',
      key: process.env.PAGEFRONT_KEY
    }
  };
};

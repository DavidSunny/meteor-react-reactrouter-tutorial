// Finding data form minimongo
// Create declaritive NAMED queries

AppStore.dataSources({
  MODEL_PUBLIC_LISTS: (query={}, options={}) => {
    return Lists.find({userId: {$exists: false}});
  }
});

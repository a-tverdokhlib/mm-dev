module.exports = {
  flywayArgs: {
    // url: 'jdbc:postgresql://starlingvalue.cpopt0azy0yu.us-east-2.rds.amazonaws.com/mm_pre',
    url: 'jdbc:postgresql://mm-pre.ckgz3swfgcbm.eu-central-1.rds.amazonaws.com/mm-pre',
    schemas: 'app_public',
    defaultSchema: 'app_public',
    locations: 'filesystem:mm-sql-migrations/',
    user: 'postgres',
    port: '5432',
    password: 'postGre!#3abZ3y!',
    sqlMigrationSuffixes: '.sql',
  },
  // Use to configure environment variables used by flyway
  env: {
    JAVA_ARGS: '-Djava.util.logging.config.file=./conf/logging.properties',
  },
  version: '4.0.3', // optional, empty or missing will download the latest
  mavinPlugins: [{ // optional, use to add any plugins (ie. logging)
    groupId: 'org.slf4j',
    artifactId: 'slf4j-api',
    version: '1.7.25',
    // This can be a specifc url to download that may be different then the auto generated url.
    downloadUrl: 'https://repo1.maven.org/maven2/org/slf4j/slf4j-api/1.7.25/slf4j-api-1.7.25.jar',
  }, {
    groupId: 'org.slf4j',
    artifactId: 'slf4j-jdk14',
    version: '1.7.25'
  }],
  downloads: {
    // storageDirectory: '/var/test', // optional, the specific directory to store the flyway downloaded files. The directory must be writable by the node app process' user.
    expirationTimeInMs: -1, // optional, -1 will never check for updates, defaults to 1 day.
  }
};

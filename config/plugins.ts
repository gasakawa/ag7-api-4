export default ({ env }) => ({
  upload: {
    config: {
      provider: "aws-s3",
      providerOptions: {
        s3Options: {
          accessKeyId: env("AWS_ACCESS_KEY_ID"),
          secretAccessKey: env("AWS_ACCESS_SECRET"),
          region: "us-east-1",
          params: {
            Bucket: env("AWS_BUCKET_NAME"),
          },
        },
      },
    },
  },
});

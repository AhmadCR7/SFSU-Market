import AWS from 'aws-sdk'

// ~ AWS setup
export const s3 = new AWS.S3({ apiVersion: '2006-03-01' })

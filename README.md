# checkall
Runs commands against every box within aws

## Dependancies
 * aws cli

## Usage
### 1. generate dump of the region
```
aws ec2 describe-instances > region.json
```
### 2. generate shell script
```
node check-all.js > region.sh
```
### 3. run the script
```
bash ./region.sh
```

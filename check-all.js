var envs = require ("./" + process.argv[2]).Reservations

envs.forEach (function (item) {
  var tagFound = false

  process.stdout.write ("echo -n ")
  item.Instances[0].Tags.forEach (function (tag) {
    if (tag.Key === "Project") {
      tagFound = true
      process.stdout.write (tag.Value)
    }
  })
  if (!tagFound) {
    process.stdout.write (item.Instances[0].PublicDnsName)
  }
  console.log ("' '")

  console.log ("ssh -o StrictHostKeyChecking=no " + item.Instances[0].PublicDnsName + " 'dpkg --get-selections | grep -v deinstall | grep imagemagic | wc -l'");
})

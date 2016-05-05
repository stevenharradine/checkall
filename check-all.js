var envs = require ("./" + process.argv[2]).Reservations

envs.forEach (function (item) {
  var tagProjectFound = false,
      tagRoleFound = false,
      project,
      role

  process.stdout.write ("echo -n ")
  item.Instances[0].Tags.forEach (function (tag) {
    if (tag.Key === "Project") {
      tagProjectFound = true
      project = tag.Value
    } else if (tag.Key === "Role") {
      tagRoleFound = true
      role = tag.Value
    }
  })
  if (!tagProjectFound) {
    project = item.Instances[0].PublicDnsName
  }

  console.log (project + "' '")
  console.log ("ssh -o StrictHostKeyChecking=no " + item.Instances[0].PublicDnsName + " 'dpkg --get-selections | grep -v deinstall | grep imagemagic | wc -l'");
})

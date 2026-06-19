# andasy.hcl app configuration file generated for regis on Thursday, 18-Jun-26 18:23:25 SAST
#
# See https://github.com/quarksgroup/andasy-cli for information about how to use this file.

app_name = "regis"

app {

  env = {}

  port = 3000

  primary_region = "fsn"

  compute {
    cpu      = 1
    memory   = 256
    cpu_kind = "shared"
  }

  process {
    name = "regis"
  }

}

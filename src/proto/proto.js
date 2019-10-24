/*eslint-disable block-scoped-var, id-length, no-control-regex, no-magic-numbers, no-prototype-builtins, no-redeclare, no-shadow, no-var, sort-vars*/
"use strict";

var $protobuf = require("protobufjs/light");

var $root = ($protobuf.roots["default"] || ($protobuf.roots["default"] = new $protobuf.Root()))
.addJSON({
  Proto: {
    options: {
      java_multiple_files: true,
      java_package: "com.stdag.service.proto",
      java_outer_classname: "Test"
    },
    nested: {
      Frame: {
        fields: {
          messageType: {
            type: "string",
            id: 1
          },
          payload: {
            type: "bytes",
            id: 2
          }
        }
      },
      RoomUserInfo: {
        fields: {
          userId: {
            type: "string",
            id: 1
          },
          nickName: {
            type: "string",
            id: 2
          },
          userHeaderImage: {
            type: "string",
            id: 3
          }
        }
      },
      TestOne: {
        fields: {},
        nested: {
          S2C: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              password: {
                type: "string",
                id: 2
              },
              version: {
                type: "string",
                id: 3
              }
            }
          },
          C2S: {
            fields: {
              name: {
                type: "string",
                id: 1
              },
              password: {
                type: "string",
                id: 2
              },
              version: {
                type: "string",
                id: 3
              }
            }
          }
        }
      },
      S99999: {
        fields: {},
        nested: {
          S2C: {
            fields: {
              serverTime: {
                type: "int32",
                id: 1
              }
            }
          },
          C2S: {
            fields: {
              id: {
                type: "string",
                id: 1
              }
            }
          }
        }
      },
      S99998: {
        fields: {},
        nested: {
          S2C: {
            fields: {
              serverTime: {
                type: "int32",
                id: 1
              }
            }
          },
          C2S: {
            fields: {
              id: {
                type: "string",
                id: 1
              }
            }
          }
        }
      }
    }
  }
});

module.exports = $root;

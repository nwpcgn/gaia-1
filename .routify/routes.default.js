

export default {
  "meta": {},
  "id": "_default",
  "name": "",
  "file": {
    "path": "src/routes/_module.svelte",
    "dir": "src/routes",
    "base": "_module.svelte",
    "ext": ".svelte",
    "name": "_module"
  },
  "asyncModule": () => import('../src/routes/_module.svelte'),
  "rootName": "default",
  "routifyDir": import.meta.url,
  "children": [
    {
      "meta": {},
      "id": "_default_dialog_svelte",
      "name": "dialog",
      "file": {
        "path": "src/routes/dialog.svelte",
        "dir": "src/routes",
        "base": "dialog.svelte",
        "ext": ".svelte",
        "name": "dialog"
      },
      "asyncModule": () => import('../src/routes/dialog.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_gaia",
      "name": "gaia",
      "file": {
        "path": "src/routes/gaia/_module.svelte",
        "dir": "src/routes/gaia",
        "base": "_module.svelte",
        "ext": ".svelte",
        "name": "_module"
      },
      "asyncModule": () => import('../src/routes/gaia/_module.svelte'),
      "children": [
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_gaia_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/gaia/index.svelte",
            "dir": "src/routes/gaia",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/gaia/index.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_gaia_personal",
          "name": "personal",
          "module": false,
          "file": {
            "path": "src/routes/gaia/personal",
            "dir": "src/routes/gaia",
            "base": "personal",
            "ext": "",
            "name": "personal"
          },
          "children": [
            {
              "meta": {
                "isDefault": true
              },
              "id": "_default_gaia_personal_index_svelte",
              "name": "index",
              "file": {
                "path": "src/routes/gaia/personal/index.svelte",
                "dir": "src/routes/gaia/personal",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/gaia/personal/index.svelte'),
              "children": []
            }
          ]
        }
      ]
    },
    {
      "meta": {},
      "id": "_default_game",
      "name": "game",
      "file": {
        "path": "src/routes/game/_module.svelte",
        "dir": "src/routes/game",
        "base": "_module.svelte",
        "ext": ".svelte",
        "name": "_module"
      },
      "asyncModule": () => import('../src/routes/game/_module.svelte'),
      "children": [
        {
          "meta": {},
          "id": "_default_game_1",
          "name": "1",
          "module": false,
          "file": {
            "path": "src/routes/game/1",
            "dir": "src/routes/game",
            "base": "1",
            "ext": "",
            "name": "1"
          },
          "children": [
            {
              "meta": {},
              "id": "_default_game_1_BgImage_svelte",
              "name": "BgImage",
              "file": {
                "path": "src/routes/game/1/BgImage.svelte",
                "dir": "src/routes/game/1",
                "base": "BgImage.svelte",
                "ext": ".svelte",
                "name": "BgImage"
              },
              "asyncModule": () => import('../src/routes/game/1/BgImage.svelte'),
              "children": []
            },
            {
              "meta": {
                "isDefault": true
              },
              "id": "_default_game_1_index_svelte",
              "name": "index",
              "file": {
                "path": "src/routes/game/1/index.svelte",
                "dir": "src/routes/game/1",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/game/1/index.svelte'),
              "children": []
            }
          ]
        },
        {
          "meta": {},
          "id": "_default_game_2",
          "name": "2",
          "module": false,
          "file": {
            "path": "src/routes/game/2",
            "dir": "src/routes/game",
            "base": "2",
            "ext": "",
            "name": "2"
          },
          "children": [
            {
              "meta": {
                "isDefault": true
              },
              "id": "_default_game_2_index_svelte",
              "name": "index",
              "file": {
                "path": "src/routes/game/2/index.svelte",
                "dir": "src/routes/game/2",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/game/2/index.svelte'),
              "children": []
            }
          ]
        },
        {
          "meta": {},
          "id": "_default_game_3",
          "name": "3",
          "module": false,
          "file": {
            "path": "src/routes/game/3",
            "dir": "src/routes/game",
            "base": "3",
            "ext": "",
            "name": "3"
          },
          "children": [
            {
              "meta": {},
              "id": "_default_game_3_BgImage_svelte",
              "name": "BgImage",
              "file": {
                "path": "src/routes/game/3/BgImage.svelte",
                "dir": "src/routes/game/3",
                "base": "BgImage.svelte",
                "ext": ".svelte",
                "name": "BgImage"
              },
              "asyncModule": () => import('../src/routes/game/3/BgImage.svelte'),
              "children": []
            },
            {
              "meta": {
                "isDefault": true
              },
              "id": "_default_game_3_index_svelte",
              "name": "index",
              "file": {
                "path": "src/routes/game/3/index.svelte",
                "dir": "src/routes/game/3",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/game/3/index.svelte'),
              "children": []
            }
          ]
        },
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_game_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/game/index.svelte",
            "dir": "src/routes/game",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/game/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "isDefault": true
      },
      "id": "_default_index_svelte",
      "name": "index",
      "file": {
        "path": "src/routes/index.svelte",
        "dir": "src/routes",
        "base": "index.svelte",
        "ext": ".svelte",
        "name": "index"
      },
      "asyncModule": () => import('../src/routes/index.svelte'),
      "children": []
    },
    {
      "meta": {},
      "id": "_default_start",
      "name": "start",
      "file": {
        "path": "src/routes/start/_module.svelte",
        "dir": "src/routes/start",
        "base": "_module.svelte",
        "ext": ".svelte",
        "name": "_module"
      },
      "asyncModule": () => import('../src/routes/start/_module.svelte'),
      "children": [
        {
          "meta": {
            "noRoute": true
          },
          "id": "_default_start__idCard_svelte",
          "name": "_idCard",
          "file": {
            "path": "src/routes/start/_idCard.svelte",
            "dir": "src/routes/start",
            "base": "_idCard.svelte",
            "ext": ".svelte",
            "name": "_idCard"
          },
          "asyncModule": () => import('../src/routes/start/_idCard.svelte'),
          "children": []
        },
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_start_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/start/index.svelte",
            "dir": "src/routes/start",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/start/index.svelte'),
          "children": []
        }
      ]
    },
    {
      "meta": {
        "dynamic": true,
        "dynamicSpread": true,
        "order": false,
        "inline": false
      },
      "name": "[...404]",
      "file": {
        "path": ".routify/components/[...404].svelte",
        "dir": ".routify/components",
        "base": "[...404].svelte",
        "ext": ".svelte",
        "name": "[...404]"
      },
      "asyncModule": () => import('./components/[...404].svelte'),
      "children": []
    },
    {
      "meta": {
        "order": 2
      },
      "id": "_default_user",
      "name": "user",
      "file": {
        "path": "src/routes/user/_module.svelte",
        "dir": "src/routes/user",
        "base": "_module.svelte",
        "ext": ".svelte",
        "name": "_module"
      },
      "asyncModule": () => import('../src/routes/user/_module.svelte'),
      "children": [
        {
          "meta": {
            "isDefault": true
          },
          "id": "_default_user_index_svelte",
          "name": "index",
          "file": {
            "path": "src/routes/user/index.svelte",
            "dir": "src/routes/user",
            "base": "index.svelte",
            "ext": ".svelte",
            "name": "index"
          },
          "asyncModule": () => import('../src/routes/user/index.svelte'),
          "children": []
        },
        {
          "meta": {},
          "id": "_default_user_signin",
          "name": "signin",
          "module": false,
          "file": {
            "path": "src/routes/user/signin",
            "dir": "src/routes/user",
            "base": "signin",
            "ext": "",
            "name": "signin"
          },
          "children": [
            {
              "meta": {
                "isDefault": true
              },
              "id": "_default_user_signin_index_svelte",
              "name": "index",
              "file": {
                "path": "src/routes/user/signin/index.svelte",
                "dir": "src/routes/user/signin",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/user/signin/index.svelte'),
              "children": []
            }
          ]
        },
        {
          "meta": {},
          "id": "_default_user_signout",
          "name": "signout",
          "module": false,
          "file": {
            "path": "src/routes/user/signout",
            "dir": "src/routes/user",
            "base": "signout",
            "ext": "",
            "name": "signout"
          },
          "children": [
            {
              "meta": {
                "isDefault": true
              },
              "id": "_default_user_signout_index_svelte",
              "name": "index",
              "file": {
                "path": "src/routes/user/signout/index.svelte",
                "dir": "src/routes/user/signout",
                "base": "index.svelte",
                "ext": ".svelte",
                "name": "index"
              },
              "asyncModule": () => import('../src/routes/user/signout/index.svelte'),
              "children": []
            }
          ]
        }
      ]
    }
  ]
}
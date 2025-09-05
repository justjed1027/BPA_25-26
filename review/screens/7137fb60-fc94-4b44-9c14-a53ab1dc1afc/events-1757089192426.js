jQuery("#simulation")
  .on("click", ".s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-38dec4ea-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/752071cd-c3f6-4b90-9524-696d674c787a"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/8a709058-dbdb-4d4e-9ce4-06ef22d00dc8"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/70083c4d-6f25-4c9b-821d-955212980866"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/e56ca5b7-6fbc-4cd8-9742-9ff9e15170d5"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D5BE2"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_4 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D5BE2"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_4 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D5BE2"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 300
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "transition": {
                      "type": "slideleft",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_4 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
                    "transition": {
                      "type": "slideright",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_4 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #shapewrapper-s-Ellipse_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 span" ],
                    "attributes": {
                      "color": "#9A9CA5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 span" ],
                    "attributes": {
                      "color": "#9A9CA5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 span" ],
                    "attributes": {
                      "color": "#9A9CA5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 span" ],
                    "attributes": {
                      "color": "#9A9CA5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 span" ],
                    "attributes": {
                      "color": "#9A9CA5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 span" ],
                    "attributes": {
                      "color": "#9A9CA5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_24 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 span" ],
                    "attributes": {
                      "color": "#9A9CA5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 span" ],
                    "attributes": {
                      "color": "#9A9CA5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 span" ],
                    "attributes": {
                      "color": "#000000",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 > .backgroundLayer > .colorLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 > .borderLayer",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "0.0px"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 span",
                  "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseenter dragenter", ".s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-38dec4ea-Input_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #mi-38dec4ea-Input_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-38dec4ea-Rectangle_6" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #mi-38dec4ea-Paragraph_30 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #mi-38dec4ea-Path_24 svg" ],
                    "attributes": {
                      "path-background-color": "#397FF9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-38dec4ea-Rectangle_7" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #mi-38dec4ea-Paragraph_31 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #mi-38dec4ea-Path_17 svg" ],
                    "attributes": {
                      "path-background-color": "#397FF9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-38dec4ea-Rectangle_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #mi-38dec4ea-Path_26 svg" ],
                    "attributes": {
                      "path-background-color": "#397FF9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #mi-38dec4ea-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_19") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-38dec4ea-Rectangle_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #mi-38dec4ea-Paragraph_33 span" ],
                    "attributes": {
                      "color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #mi-38dec4ea-Path_1 svg" ],
                    "attributes": {
                      "path-background-color": "#397FF9",
                      "path-background-opacity": "1.0"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Button_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D5BE2"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 250
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Button_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D5BE2"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 250
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Button_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#0D5BE2"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 250
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_53") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_25" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_43" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_44") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_21" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_39" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_39") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_19" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_36" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_29") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_15" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_33" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_19") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_5" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_22" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_58") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_32" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_6") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_52" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_63") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_38" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_7") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_57" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_68") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_42" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_62" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_73") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_45" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_66" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_78") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_48" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_72" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_83") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_51" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_74" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_88") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_54" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_12") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_79" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_93") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_57" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_13") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_84" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_98") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_60" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_14") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_88" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_103") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_63" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_15") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Rectangle_94" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Category_1 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Category_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .s-Category_2 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .s-Category_2 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .s-Category_2 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .s-Category_2 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Category_2 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeCursor",
                  "parameter": {
                    "type": "pointer"
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_25") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_25 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_26") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_26 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_27") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_27 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_28") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_28 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_29") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_29 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_30") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_30 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_40") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_40 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_21") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_21 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_1") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_1 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_2") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_2 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_3") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_3 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_4") && jFirer.has(event.relatedTarget).length === 0) {
      event.backupState = true;
      event.target = jFirer;
      window.overTargets.push(jFirer.get(0));
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc #s-Rectangle_4 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    }
  })
  .on("mouseleave dragleave", ".s-7137fb60-fc94-4b44-9c14-a53ab1dc1afc .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-38dec4ea-Input_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_16")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_17")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_18")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-38dec4ea-Hotspot_19")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_53")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_5")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_44")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_39")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_29")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_19")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_58")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_6")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_63")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_7")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_68")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_8")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_73")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_9")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_78")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_10")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_83")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_88")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_12")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_93")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_13")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_98")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_14")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_103")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_15")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Category_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Category_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_25")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_26")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_27")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_28")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_29")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_30")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_40")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_21")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });
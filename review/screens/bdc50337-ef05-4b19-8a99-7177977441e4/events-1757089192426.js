jQuery("#simulation")
  .on("click", ".s-bdc50337-ef05-4b19-8a99-7177977441e4 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-ba9aa5d3-Hotspot_4")) {
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
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_3")) {
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
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_1")) {
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
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_2")) {
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
    } else if(jFirer.is("#s-Rectangle_21")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_12",
                  "property": "jimGetHeight"
                },"60" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_12" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "760.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "170.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_12" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "180.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_21 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_13" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "653.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_14" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "653.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_12" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "760.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_12" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_21 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#CFD4D9"
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
    } else if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_13",
                  "property": "jimGetHeight"
                },"60" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_13" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "653.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "200.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_13" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "180.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_22 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_12" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "760.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_14" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "653.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_13" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "653.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_13" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_22 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#CFD4D9"
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
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_14",
                  "property": "jimGetHeight"
                },"60" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_14" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "653.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "280.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_15" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "180.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_12" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "760.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_13" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "653.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_14" ],
                    "width": {
                      "type": "exprvalue",
                      "value": "653.0"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "60.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_15" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0.0"
                    },
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 300
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#CFD4D9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_27 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
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
    } else if(jFirer.is("#s-Rectangle_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#F8F9FA"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 span" ],
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 span" ],
                    "attributes": {
                      "color": "#31333C",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 span" ],
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 span" ],
                    "attributes": {
                      "color": "#9A9CA5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 span" ],
                    "attributes": {
                      "color": "#31333C",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 span" ],
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 span" ],
                    "attributes": {
                      "color": "#31333C",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Rectangle_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .backgroundLayer > .colorLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .borderLayer",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-width": "3.0px",
                      "border-bottom-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 span",
                  "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 span" ],
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#397FF9"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 span" ],
                    "attributes": {
                      "color": "#31333C",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-weight": "700"
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 200
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_2")) {
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
    }
  })
  .on("pageload", ".s-bdc50337-ef05-4b19-8a99-7177977441e4 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-bdc50337-ef05-4b19-8a99-7177977441e4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-ba9aa5d3-Hotspot_3","#mi-ba9aa5d3-Hotspot_2","#mi-ba9aa5d3-Hotspot_4","#mi-ba9aa5d3-Hotspot_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-ba9aa5d3-Hotspot_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-ba9aa5d3-Rectangle_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Data_grid_2" ],
                    "value": {
                      "datatype": "variable",
                      "element": "Row"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Path_26 svg" ],
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Paragraph_32 span" ],
                    "attributes": {
                      "color": "#397FF9"
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
  .on("mouseenter dragenter", ".s-bdc50337-ef05-4b19-8a99-7177977441e4 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-ba9aa5d3-Input_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Input_2 > .borderLayer" ],
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
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-ba9aa5d3-Rectangle_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Paragraph_30 span" ],
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Path_24 svg" ],
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
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-ba9aa5d3-Rectangle_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Paragraph_31 span" ],
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-ba9aa5d3-Rectangle_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Path_26 svg" ],
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Paragraph_32 span" ],
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
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-ba9aa5d3-Rectangle_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Paragraph_33 span" ],
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #mi-ba9aa5d3-Path_1 svg" ],
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
    } else if(jFirer.is("#s-Rectangle_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_5 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#F8F9FA"
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
    } else if(jFirer.is("#s-Rectangle_6") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_6 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#F8F9FA"
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
    } else if(jFirer.is("#s-Rectangle_7") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_7 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#F8F9FA"
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
    } else if(jFirer.is("#s-Rectangle_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F8F9FA"
                    }
                  },{
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Rectangle_11 > .borderLayer" ],
                    "attributes": {
                      "border-bottom-color": "#F8F9FA"
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
    } else if(jFirer.is("#s-Paragraph_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-bdc50337-ef05-4b19-8a99-7177977441e4 #s-Paragraph_2 span" ],
                    "attributes": {
                      "color": "#397FF9"
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
  .on("mouseleave dragleave", ".s-bdc50337-ef05-4b19-8a99-7177977441e4 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-ba9aa5d3-Input_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-ba9aa5d3-Hotspot_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_5")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_6")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_7")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });
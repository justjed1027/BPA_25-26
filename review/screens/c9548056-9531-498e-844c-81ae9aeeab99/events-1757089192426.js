jQuery("#simulation")
  .on("click", ".s-c9548056-9531-498e-844c-81ae9aeeab99 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-17f4bc5f-Hotspot_4")) {
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
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_3")) {
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
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_1")) {
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
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_2")) {
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
    } else if(jFirer.is("#s-Rectangle_22")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_2",
                  "property": "jimGetHeight"
                },"60" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_2" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-Path_2" ],
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
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_13","#s-Path_10","#s-Path_11","#s-Path_9","#s-Path_23" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0.0"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_22 > .borderLayer" ],
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
                    "target": [ "#s-Panel_4","#s-Panel_5","#s-Panel_6","#s-Panel_3","#s-Panel_7" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
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
                    "target": [ "#s-Panel_2" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-Path_2" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_22 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_24")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_3",
                  "property": "jimGetHeight"
                },"60" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_3" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "180.0"
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
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_10","#s-Path_11","#s-Path_2","#s-Path_9","#s-Path_23" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0.0"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_24 > .borderLayer" ],
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
                    "target": [ "#s-Panel_4","#s-Panel_2","#s-Panel_5","#s-Panel_6","#s-Panel_7" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
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
                    "target": [ "#s-Panel_3" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_24 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_28")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_5",
                  "property": "jimGetHeight"
                },"60" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_5" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "180.0"
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
                    "target": [ "#s-Path_9" ],
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
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_13","#s-Path_10","#s-Path_11","#s-Path_2","#s-Path_23" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0.0"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_28 > .borderLayer" ],
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
                    "target": [ "#s-Panel_4","#s-Panel_2","#s-Panel_6","#s-Panel_3","#s-Panel_7" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
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
                    "target": [ "#s-Panel_5" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-Path_9" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_28 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_30")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_6",
                  "property": "jimGetHeight"
                },"60" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_6" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "180.0"
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
                    "target": [ "#s-Path_10" ],
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
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_13","#s-Path_11","#s-Path_2","#s-Path_9","#s-Path_23" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0.0"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_30 > .borderLayer" ],
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
                    "target": [ "#s-Panel_4","#s-Panel_2","#s-Panel_5","#s-Panel_3","#s-Panel_7" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-Panel_4" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
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
                    "target": [ "#s-Panel_6" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-Path_10" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_30 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_32")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_7",
                  "property": "jimGetHeight"
                },"60" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_7" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "180.0"
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
                    "target": [ "#s-Path_11" ],
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
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_13","#s-Path_10","#s-Path_2","#s-Path_9","#s-Path_23" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0.0"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_32 > .borderLayer" ],
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
                    "target": [ "#s-Panel_4","#s-Panel_2","#s-Panel_5","#s-Panel_6","#s-Panel_3" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
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
                    "target": [ "#s-Panel_7" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-Path_11" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_32 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_26")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Panel_4",
                  "property": "jimGetHeight"
                },"60" ]
              },
              "actions": [
                {
                  "action": "jimResize",
                  "parameter": {
                    "target": [ "#s-Panel_4" ],
                    "width": {
                      "type": "noresize"
                    },
                    "height": {
                      "type": "exprvalue",
                      "value": "180.0"
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
                    "target": [ "#s-Path_23" ],
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
                  "action": "jimRotate",
                  "parameter": {
                    "target": [ "#s-Path_13","#s-Path_10","#s-Path_11","#s-Path_2","#s-Path_9" ],
                    "angle": {
                      "type": "rotateto",
                      "value": "0.0"
                    }
                  },
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "0.0px",
                      "border-bottom-left-radius": "0.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
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
                    "target": [ "#s-Panel_2","#s-Panel_5","#s-Panel_6","#s-Panel_3","#s-Panel_7" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-Panel_4" ],
                    "width": {
                      "type": "noresize"
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
                    "target": [ "#s-Path_23" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .borderLayer" ],
                    "attributes": {
                      "border-top-left-radius": "0.0px",
                      "border-top-right-radius": "0.0px",
                      "border-bottom-right-radius": "7.0px",
                      "border-bottom-left-radius": "7.0px"
                    }
                  },{
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Rectangle_26 > .backgroundLayer" ],
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
    } else if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Button_1 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Button_1 > .backgroundLayer > .colorLayer" ],
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
    }
  })
  .on("mouseenter dragenter", ".s-c9548056-9531-498e-844c-81ae9aeeab99 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-17f4bc5f-Input_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #mi-17f4bc5f-Input_2 > .borderLayer" ],
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
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-17f4bc5f-Rectangle_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #mi-17f4bc5f-Paragraph_30 span" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #mi-17f4bc5f-Path_24 svg" ],
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
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-17f4bc5f-Rectangle_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #mi-17f4bc5f-Paragraph_31 span" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #mi-17f4bc5f-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-17f4bc5f-Rectangle_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #mi-17f4bc5f-Path_26 svg" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #mi-17f4bc5f-Paragraph_32 span" ],
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
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-17f4bc5f-Rectangle_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #mi-17f4bc5f-Paragraph_33 span" ],
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #mi-17f4bc5f-Path_1 svg" ],
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
    } else if(jFirer.is(".s-Paragraph_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ ".s-Path_3" ]
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
    } else if(jFirer.is("#s-Paragraph_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_19" ]
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
    } else if(jFirer.is("#s-Paragraph_14") && jFirer.has(event.relatedTarget).length === 0) {
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_7" ]
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
    } else if(jFirer.is("#s-Paragraph_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Path_5" ]
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
                    "target": [ "#s-c9548056-9531-498e-844c-81ae9aeeab99 #s-Button_1 > .backgroundLayer > .colorLayer" ],
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
    }
  })
  .on("mouseleave dragleave", ".s-c9548056-9531-498e-844c-81ae9aeeab99 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-17f4bc5f-Input_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-17f4bc5f-Hotspot_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Paragraph_19")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_18")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_14")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });
jQuery("#simulation")
  .on("click", ".s-752071cd-c3f6-4b90-9524-696d674c787a .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-2ec0e6a8-Hotspot_8")) {
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
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_9")) {
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
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_10")) {
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
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_11")) {
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
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span" ],
                    "attributes": {
                      "color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "New calendar-card" ],
                    "value": "4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_15",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_16",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_17",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_20",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_14",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_18" ],
                    "attributes": {
                      "filter": "none"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_15" ],
                    "attributes": {
                      "filter": " drop-shadow(-0.0px -0.0px 5px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Ellipse_15" ],
                    "attributes": {
                      "stroke-width": "4.0px",
                      "stroke": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Paragraph_69")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span" ],
                    "attributes": {
                      "color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "New calendar-card" ],
                    "value": "3"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_15",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_16",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_17",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_20",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_14",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_18" ],
                    "attributes": {
                      "filter": "none"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_14" ],
                    "attributes": {
                      "filter": " drop-shadow(-0.0px -0.0px 2px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Ellipse_14" ],
                    "attributes": {
                      "stroke-width": "4.0px",
                      "stroke": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span" ],
                    "attributes": {
                      "color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "New calendar-card" ],
                    "value": "4"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_15",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_16",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_17",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_20",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_14",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_18" ],
                    "attributes": {
                      "filter": "none"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_15" ],
                    "attributes": {
                      "filter": " drop-shadow(-0.0px -0.0px 5px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Ellipse_15" ],
                    "attributes": {
                      "stroke-width": "4.0px",
                      "stroke": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_71")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span" ],
                    "attributes": {
                      "color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "New calendar-card" ],
                    "value": "2"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_15",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_16",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_17",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_20",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_14",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_18" ],
                    "attributes": {
                      "filter": "none"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_16" ],
                    "attributes": {
                      "filter": " drop-shadow(-0.0px -0.0px 5px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Ellipse_16" ],
                    "attributes": {
                      "stroke-width": "4.0px",
                      "stroke": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Paragraph_70")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span" ],
                    "attributes": {
                      "color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "New calendar-card" ],
                    "value": "1"
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_15",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_16",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_17",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_20",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_14",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_18" ],
                    "attributes": {
                      "filter": "none"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #shapewrapper-s-Ellipse_16" ],
                    "attributes": {
                      "filter": " drop-shadow(-0.0px -0.0px 5px rgba(64,64,64,0.5))"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Ellipse_16" ],
                    "attributes": {
                      "stroke-width": "4.0px",
                      "stroke": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "parallel",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Hotspot_6")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFA748"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span" ],
                    "attributes": {
                      "color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_51" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_20",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_58" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_21",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_52" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_60",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFA748"
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
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Calendar-Card" ],
                    "value": "1"
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
    } else if(jFirer.is("#s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFA748"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span" ],
                    "attributes": {
                      "color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_51" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_27",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_58" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_49",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_52" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_50",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFA748"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Calendar-Card" ],
                    "value": "2"
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
    } else if(jFirer.is("#s-Hotspot_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span" ],
                    "attributes": {
                      "color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_51" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_36",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_58" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_28",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_52" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_66",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#397FF9"
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
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Calendar-Card" ],
                    "value": "3"
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
    } else if(jFirer.is("#s-Hotspot_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#737EE5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span" ],
                    "attributes": {
                      "color": "#31333C"
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
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_51" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_29",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_58" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_43",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_52" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Paragraph_44",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_12 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#737EE5"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Panel_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Calendar-Card" ],
                    "value": "4"
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
    } else if(jFirer.is("#s-Rectangle_12")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_12 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#FFFFFF",
                      "border-right-color": "#FFFFFF",
                      "border-bottom-color": "#FFFFFF",
                      "border-left-color": "#FFFFFF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_12 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#333333",
                      "border-right-color": "#333333",
                      "border-bottom-color": "#333333",
                      "border-left-color": "#333333"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ null,"February-1" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ null,"February-2" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ null,"March-1" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ null,"March-2" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ null,"April-1" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ null,"April-2" ]
              },
              "actions": [
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ null,"March-3" ]
              },
              "actions": [
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Path_23")) {
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
    } else if(jFirer.is("#s-Rectangle_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_23 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_23 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_23 span" ],
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
    } else if(jFirer.is("#s-Rectangle_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_24 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_24 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_24 span" ],
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
    } else if(jFirer.is("#s-Hotspot_5")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Calendar-Card"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Calendar-Card"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Calendar-Card"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "Calendar-Card"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_12" ]
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
    } else if(jFirer.is("#s-Hotspot_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_24" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span" ],
                    "attributes": {
                      "color": "#31333C"
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
    } else if(jFirer.is("#s-Paragraph_54")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimSubstring",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_7",
                            "property": "jimGetValue"
                          },"0","2" ]
                        },"12" ]
                      },{
                        "action": "jimSubstring",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_7",
                          "property": "jimGetValue"
                        },"2","5" ]
                      } ]
                    }
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
    } else if(jFirer.is("#s-Paragraph_55")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimSubstring",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_7",
                            "property": "jimGetValue"
                          },"0","2" ]
                        },"12" ]
                      },{
                        "action": "jimSubstring",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_7",
                          "property": "jimGetValue"
                        },"2","5" ]
                      } ]
                    }
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
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "New calendar-card"
                },"1" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_20" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_21" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"AM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_60" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },"AM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_9" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "New calendar-card"
                },"2" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_27" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_49" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"AM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_50" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },"AM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_11" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "New calendar-card"
                },"3" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_36" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_28" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"AM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_66" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },"AM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_13" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            },
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "variable",
                  "element": "New calendar-card"
                },"4" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_29" ],
                    "value": {
                      "datatype": "property",
                      "target": "#s-Input_8",
                      "property": "jimGetValue"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_43" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_7",
                        "property": "jimGetValue"
                      },"AM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Paragraph_44" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "datatype": "property",
                        "target": "#s-Input_1",
                        "property": "jimGetValue"
                      },"AM" ]
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-Group_12" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Button_10 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Button_10 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Button_11 > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Button_11 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Paragraph_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimPlus",
                        "parameter": [ {
                          "action": "jimSubstring",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_1",
                            "property": "jimGetValue"
                          },"0","2" ]
                        },"12" ]
                      },{
                        "action": "jimSubstring",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        },"2","5" ]
                      } ]
                    }
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
    } else if(jFirer.is("#s-Paragraph_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_1" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimSubstring",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_1",
                            "property": "jimGetValue"
                          },"0","2" ]
                        },"12" ]
                      },{
                        "action": "jimSubstring",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_1",
                          "property": "jimGetValue"
                        },"2","5" ]
                      } ]
                    }
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
    } else if(jFirer.is("#s-Hotspot_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#s-Group_47" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_5 > .backgroundLayer > .colorLayer",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_15 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_10 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFF7EE"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F4F8FF"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_47 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_50 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_67 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_36 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_28 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_21 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_27 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_60 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_29 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_49 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_61 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_43 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_44 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_20 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_53 span",
                  "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_66 span" ],
                    "attributes": {
                      "color": "#31333C"
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
  .on("click", ".s-752071cd-c3f6-4b90-9524-696d674c787a .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_3")) {
      if(jFirer.data("jimHasToggle")) {
        jFirer.removeData("jimHasToggle");
        jEvent.undoCases(jFirer);
      } else {
        jFirer.data("jimHasToggle", true);
        event.backupState = true;
        event.target = jFirer;
        cases = [
          {
            "blocks": [
              {
                "actions": [
                  {
                    "action": "jimRotate",
                    "parameter": {
                      "target": [ "#s-Group_41" ],
                      "angle": {
                        "type": "rotateto",
                        "value": "180.0"
                      }
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
    }
  })
  .on("pageload", ".s-752071cd-c3f6-4b90-9524-696d674c787a .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-752071cd-c3f6-4b90-9524-696d674c787a")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-2ec0e6a8-Hotspot_9","#mi-2ec0e6a8-Hotspot_8","#mi-2ec0e6a8-Hotspot_11","#mi-2ec0e6a8-Hotspot_10" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-2ec0e6a8-Hotspot_8" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-2ec0e6a8-Rectangle_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Paragraph_30 span" ],
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Path_24 svg" ],
                    "attributes": {
                      "path-background-color": "#397FF9",
                      "path-background-opacity": "1.0"
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
        },
        {
          "blocks": [
            {
              "condition": {
                "action": "jimGreater",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "target": [ "#s-Input_7" ],
                    "value": {
                      "action": "jimConcat",
                      "parameter": [ {
                        "action": "jimMinus",
                        "parameter": [ {
                          "action": "jimSubstring",
                          "parameter": [ {
                            "datatype": "property",
                            "target": "#s-Input_7",
                            "property": "jimGetValue"
                          },"0","2" ]
                        },"12" ]
                      },{
                        "action": "jimSubstring",
                        "parameter": [ {
                          "datatype": "property",
                          "target": "#s-Input_7",
                          "property": "jimGetValue"
                        },"2","5" ]
                      } ]
                    }
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
  .on("change", ".s-752071cd-c3f6-4b90-9524-696d674c787a .change", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_7",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_54 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_55 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
    } else if(jFirer.is("#s-Input_1")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimLessOrEquals",
                "parameter": [ {
                  "action": "jimSubstring",
                  "parameter": [ {
                    "datatype": "property",
                    "target": "#s-Input_1",
                    "property": "jimGetValue"
                  },"0","2" ]
                },"11" ]
              },
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            },
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#E5E5EA",
                      "border-right-color": "#E5E5EA",
                      "border-bottom-color": "#E5E5EA",
                      "border-left-color": "#E5E5EA"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_38 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#F2F2F7",
                      "border-right-color": "#F2F2F7",
                      "border-bottom-color": "#F2F2F7",
                      "border-left-color": "#F2F2F7"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_39 span" ],
                    "attributes": {
                      "color": "#000000"
                    }
                  },{
                    "effect": {
                      "type": "none",
                      "easing": "linear",
                      "duration": 100
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
  .on("focusin", ".s-752071cd-c3f6-4b90-9524-696d674c787a .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_65" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_65 span" ],
                    "attributes": {
                      "color": "#397FF9",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "8.25pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#397FF9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#397FF9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#397FF9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#397FF9"
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_42" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "-22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_42 span" ],
                    "attributes": {
                      "color": "#397FF9",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "8.25pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#397FF9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#397FF9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#397FF9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#397FF9"
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
  .on("focusout", ".s-752071cd-c3f6-4b90-9524-696d674c787a .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_8",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_65" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_65 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "9.75pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Input_8 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#CFD4D9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#CFD4D9"
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
    } else if(jFirer.is("#s-Input_3")) {
      cases = [
        {
          "blocks": [
            {
              "condition": {
                "action": "jimEquals",
                "parameter": [ {
                  "datatype": "property",
                  "target": "#s-Input_3",
                  "property": "jimGetValue"
                },"" ]
              },
              "actions": [
                {
                  "action": "jimMove",
                  "parameter": {
                    "target": [ "#s-Paragraph_42" ],
                    "top": {
                      "type": "movebyoffset",
                      "value": "22.0"
                    },
                    "left": {
                      "type": "nomove"
                    },
                    "containment": false,
                    "effect": {
                      "type": "none",
                      "easing": "swing",
                      "duration": 150
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Paragraph_42 span" ],
                    "attributes": {
                      "color": "#9A9CA5",
                      "font-family": "'Poppins_0.0.0_system',Arial",
                      "font-size": "9.75pt",
                      "font-weight": "400"
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Input_3 > .borderLayer" ],
                    "attributes": {
                      "border-top-width": "1.0px",
                      "border-top-color": "#CFD4D9",
                      "border-right-width": "1.0px",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-width": "1.0px",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-width": "1.0px",
                      "border-left-color": "#CFD4D9"
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
  .on("mouseenter dragenter", ".s-752071cd-c3f6-4b90-9524-696d674c787a .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-2ec0e6a8-Input_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Input_2 > .borderLayer" ],
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
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-2ec0e6a8-Rectangle_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Paragraph_30 span" ],
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Path_24 svg" ],
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
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_9") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-2ec0e6a8-Rectangle_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Paragraph_31 span" ],
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-2ec0e6a8-Rectangle_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Path_26 svg" ],
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Paragraph_32 span" ],
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
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-2ec0e6a8-Rectangle_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Paragraph_33 span" ],
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #mi-2ec0e6a8-Path_1 svg" ],
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
    } else if(jFirer.is("#s-Category_3") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a .s-Category_3 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a .s-Category_3 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a .s-Category_3 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a .s-Category_3 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Category_3 > .borderLayer" ],
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Button_3 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Path_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Path_23 svg" ],
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
    } else if(jFirer.is("#s-Rectangle_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_23 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_24") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Rectangle_24 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Button_10 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Button_11") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Button_11 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Input_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Input_8 > .borderLayer" ],
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-752071cd-c3f6-4b90-9524-696d674c787a #s-Input_3 > .borderLayer" ],
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
    }
  })
  .on("mouseleave dragleave", ".s-752071cd-c3f6-4b90-9524-696d674c787a .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-2ec0e6a8-Input_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_8")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_9")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_10")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-2ec0e6a8-Hotspot_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Category_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Path_23")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_23")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_24")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_10")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Button_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_8")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Input_3")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });
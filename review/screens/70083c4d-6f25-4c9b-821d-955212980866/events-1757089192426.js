jQuery("#simulation")
  .on("click", ".s-70083c4d-6f25-4c9b-821d-955212980866 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#mi-6e105f79-Hotspot_4")) {
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
    } else if(jFirer.is("#mi-6e105f79-Hotspot_5")) {
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
    } else if(jFirer.is("#mi-6e105f79-Hotspot_1")) {
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
    } else if(jFirer.is("#mi-6e105f79-Hotspot_2")) {
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
    } else if(jFirer.is("#s-Hotspot_16")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_17")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_18")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_19")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_20")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_21")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_22")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_23")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_24")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_25")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_26")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_27")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_28")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_29")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_30")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_31")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_32")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_33")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_34")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_35")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_36")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_37")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_38")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_39")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_40")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_41")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_43")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_44")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_14")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Hotspot_15")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_65 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_41 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_36 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_70 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_57 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_20 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_38 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_54 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_29 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_55 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_59 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_34 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_43 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_24 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_58 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_56 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_36 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_44 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_27 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_53 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_62 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_60 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_52 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_37 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_61 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_42 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_46 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_63 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_23 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_25 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_51 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_50 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#31333C"
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_45 span" ],
                    "attributes": {
                      "color": "#FFFFFF"
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
    } else if(jFirer.is("#s-Rectangle_42")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_48 > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_48 > .borderLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 > .borderLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 span" ],
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
    } else if(jFirer.is("#s-Rectangle_13")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_48 > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_48 > .borderLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 > .borderLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_48 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 span" ],
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
    } else if(jFirer.is("#s-Rectangle_48")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_48 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_48 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_48 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 > .borderLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 > .borderLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 span" ],
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
    } else if(jFirer.is("#s-Rectangle_47")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#EBF2FE"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#397FF9",
                      "border-right-color": "#397FF9",
                      "border-bottom-color": "#397FF9",
                      "border-left-color": "#397FF9"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 > .backgroundLayer > .colorLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#FFFFFF"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 > .borderLayer",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 > .borderLayer" ],
                    "attributes": {
                      "border-top-color": "#CFD4D9",
                      "border-right-color": "#CFD4D9",
                      "border-bottom-color": "#CFD4D9",
                      "border-left-color": "#CFD4D9"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 span",
                  "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 span" ],
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
    } else if(jFirer.is(".s-Hotspot_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimSetValue",
                  "parameter": {
                    "variable": [ "Row" ],
                    "value": {
                      "datatype": "gridcell",
                      "datamaster": "Courses",
                      "element": "#s-Data_grid_1"
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/bdc50337-ef05-4b19-8a99-7177977441e4"
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
  .on("click", ".s-70083c4d-6f25-4c9b-821d-955212980866 .toggle", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Category_1")) {
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
                      "target": [ "#s-Group_9" ],
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
  .on("pageload", ".s-70083c4d-6f25-4c9b-821d-955212980866 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-70083c4d-6f25-4c9b-821d-955212980866")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-6e105f79-Hotspot_2","#mi-6e105f79-Hotspot_1","#mi-6e105f79-Hotspot_5","#mi-6e105f79-Hotspot_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimHide",
                  "parameter": {
                    "target": [ "#mi-6e105f79-Hotspot_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#mi-6e105f79-Rectangle_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Path_26 svg" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Paragraph_32 span" ],
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
  .on("mouseenter dragenter", ".s-70083c4d-6f25-4c9b-821d-955212980866 .mouseenter", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-6e105f79-Input_8") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Input_8 > .borderLayer" ],
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
    } else if(jFirer.is("#mi-6e105f79-Hotspot_4") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-6e105f79-Rectangle_4" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Paragraph_30 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Path_24 svg" ],
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
    } else if(jFirer.is("#mi-6e105f79-Hotspot_5") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-6e105f79-Rectangle_3" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Paragraph_31 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Path_17 svg" ],
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
    } else if(jFirer.is("#mi-6e105f79-Hotspot_1") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-6e105f79-Rectangle_2" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Path_26 svg" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Paragraph_32 span" ],
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
    } else if(jFirer.is("#mi-6e105f79-Hotspot_2") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#mi-6e105f79-Rectangle_1" ]
                  },
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Paragraph_33 span" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #mi-6e105f79-Path_1 svg" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_27 > .borderLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_29 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_10") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_10 > .borderLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_11 > .borderLayer" ],
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 .s-Category_1 .line_options.selected" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 .s-Category_1 .selected > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 .s-Category_1 .line_options:hover" ],
                    "attributes": {
                      "background-color": "#F7F7F7 !important"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 .s-Category_1 .line_options:hover > .options" ],
                    "attributes": {
                      "color": "#000000 !important"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Category_1 > .borderLayer" ],
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
    } else if(jFirer.is("#s-Hotspot_16") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_56 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_17") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_61 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_18") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_66 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_19") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_47 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_20") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_52 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_21") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_57 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_22") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_62 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_23") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_67 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_24") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_37 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_25") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_42 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_26") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_48 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_27") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_53 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_28") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_58 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_29") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_63 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_30") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_68 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_31") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_38 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_32") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_43 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_33") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_49 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_34") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_54 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_35") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_59 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_36") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_64 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_37") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_69 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_38") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_39 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_39") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_44 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_40") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_50 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_41") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_55 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_42") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_60 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_43") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_40 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Hotspot_44") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_45 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_46 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 .verticalalign" ],
                    "attributes": {
                      "vertical-align": "middle"
                    }
                  },{
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Cell_51 > .cellContainerChild > .backgroundLayer > .colorLayer" ],
                    "attributes": {
                      "background-color": "#E5EAEF"
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
    } else if(jFirer.is("#s-Rectangle_42") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_42 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_13") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_13 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_48") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_48 > .backgroundLayer > .colorLayer" ],
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
    } else if(jFirer.is("#s-Rectangle_47") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Rectangle_47 > .backgroundLayer > .colorLayer" ],
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
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Paragraph_11 span" ],
                    "attributes": {
                      "color": "#3E1D7F"
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
    } else if(jFirer.is(".s-Rectangle_43") && jFirer.has(event.relatedTarget).length === 0) {
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
                    "target": [ "#s-70083c4d-6f25-4c9b-821d-955212980866 #s-Data_grid_1 .s-Rectangle_43 > .borderLayer" ],
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
    } else if(jFirer.is(".s-Paragraph_21") && jFirer.has(event.relatedTarget).length === 0) {
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
    }
  })
  .on("mouseleave dragleave", ".s-70083c4d-6f25-4c9b-821d-955212980866 .mouseleave", function(event, data) {
    var jEvent, jFirer, cases;
    if(jimUtil.isAlternateModeActive()) return;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    event.data = data;
    jFirer = jEvent.getDirectEventFirer(this);
    if(jFirer.is("#mi-6e105f79-Input_8")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6e105f79-Hotspot_4")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6e105f79-Hotspot_5")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6e105f79-Hotspot_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#mi-6e105f79-Hotspot_2")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_27")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_29")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_10")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Category_1")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_16")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_17")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_18")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_19")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_20")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_21")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_22")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_23")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_24")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_25")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_26")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_27")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_28")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_29")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_30")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_31")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_32")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_33")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_34")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_35")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_36")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_37")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_38")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_39")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_40")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_41")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_42")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_43")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_44")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_14")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Hotspot_15")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_42")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_13")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_48")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Rectangle_47")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is("#s-Paragraph_11")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Rectangle_43")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    } else if(jFirer.is(".s-Paragraph_21")) {
      if (window.overTargets.indexOf(jFirer.get(0)) !== -1)
      	window.overTargets.splice(window.overTargets.indexOf(jFirer.get(0)), 1);
      jEvent.undoCases(jFirer);
    }
  });
(function(window, undefined) {
  var dictionary = {
    "a98aaeb3-c5ba-4ea1-80d8-890c3ead8f3d": "Settings",
    "8a709058-dbdb-4d4e-9ce4-06ef22d00dc8": "Assignment",
    "fa046fa7-aa68-4ae4-a226-d2c62d639fa5": "Members",
    "1df52006-9e02-40dd-a334-67501efd94df": "Sign In",
    "752071cd-c3f6-4b90-9524-696d674c787a": "Calendar",
    "bdc50337-ef05-4b19-8a99-7177977441e4": "Courses detail",
    "c9548056-9531-498e-844c-81ae9aeeab99": "About",
    "e56ca5b7-6fbc-4cd8-9742-9ff9e15170d5": "Dashboard",
    "70083c4d-6f25-4c9b-821d-955212980866": "My courses",
    "7137fb60-fc94-4b44-9c14-a53ab1dc1afc": "Events",
    "5d0926ee-6fec-479e-a132-b0dbb2f38290": "Home",
    "102fb302-13a4-4c4e-b258-5f7f17eff2be": "Base template",
    "103bcf5e-3225-426f-97eb-9d4ec53b2ba0": "None",
    "ee5abaf1-af3b-412d-8859-1558d7253804": "Sidebar navigation",
    "55de0f35-ec09-4d13-9834-1250968926b8": "Top navigation",
    "95d35c04-c92b-4e04-b246-e4066a69ea34": "Company logo",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);
define({ 

 onPreshow : function(){
    var data = [
      {
        "title" : "Object Services",
        "desc1" : "Object Services is a feature of Kony Fabric that enables model-driven app design and development by following a microservices architectural approach to create reusable components. With Object Services, you can define your preferred app data model that defines how your application wants to interact with its data. There is a clear separation between the app data model and how it maps to the back-end systems of record. The defined app data model and mappings encapsulate the back-end data and APIs and abstract the API complexity from your client application.<br><br>With Object Services, you can create app models from line-of-business (LOB) objects and define service-driven objects from existing APIs in your enterprise. LOB objects are accessed by using the Kony Fabric business adapters that enable a back-end developer to visually discover and select entities exposed by the LOB system. A service-driven object is created from a set of existing Kony Fabric Integration Services that connect to existing API endpoints or Kony Fabric Orchestration Services that combine multiple APIs into a new composite or aggregate API.",
        "desc2" : "The Employee Directory Application makes use of object services in order to fetch employee data from the back end and show on the front-end app. The video placed below provides an overview of the object services in Kony Fabric and uses a small example of an Orders application to demonstrate the usage of the same.<br><br>Please follow the video below to get an overview:",
        "video2" : "https://www.youtube.com/watch?v=7DdIyMWLL7Q",
        "image2" : "object.png",
        "link" : 'Please find below the link for the video tutorials:<br><a href = "http://docs.kony.com/konylibrary/konyfabric/mf_video_tutorials/Default.htm#Module/object_services_overview.htm%3FTocPath%3D_____15"> Object Services Overview </a><br><br>Please find below the link for the documentation site:<br><a href =  "http://docs.kony.com/konylibrary/konyfabric/kony_fabric_user_guide/Default.htm#Objectservices.htm?TocPath=Features|Object%2520Services|_____0"> Object Services Documentation </a>'
      },
       {
        "title" : "Components",
        "desc1" : "Components provide a powerful way to create complex applications quickly. You can download a rich assortment of components from Kony Marketplace, or create your own reusable components, and then drag and drop the components into your application to create sophisticated, full-featured applications without writing all of the code.<br>For example, suppose you want to create a mobile application that lets users log in to their account and display an account overview. You can build a log-in screen by downloading a log-in component from Kony Marketplace, and then dragging and dropping it onto a form.",
        "desc2" : "The Employee Directory App makes use of Kony Marketplace components such as Log In Component, Sliding Menu Component, and List-Detail Component. The video tutorial specified below talks about authoring a simple UI component. The example used in the video is an Email Id Text Field component which accepts an email id and validates for the correct syntax and business rules. This will help you get a basic idea about components.",
        "video2" : "https://www.youtube.com/watch?v=RuOerVZufR8",
        "image2" : "component.png",
        "link" : 'Please find below the link for the video tutorials:<br><a href = "http://docs.kony.com/konylibrary/visualizer/visualizer_tutorials/default.htm#Module/component_creation.htm%3FTocPath%3D_____6"> Component Creation </a><br><br>Please find below the link for the documentation site:<br><a href = "http://docs.kony.com/konylibrary/visualizer/visualizer_user_guide/Content/C_ComponentsOverview.htm"> Components Overview </a><br><a href = "http://docs.kony.com/konylibrary/visualizer/visualizer_user_guide/Content/C_CreatingComponent.htm"> Creating a Component </a><br><a href = "http://docs.kony.com/konylibrary/visualizer/visualizer_user_guide/Content/C_UsingComponents.htm"> Using Components </a>'
      }
    ];    
   this.view.knowledgeframework.setData(data);
  }
 });
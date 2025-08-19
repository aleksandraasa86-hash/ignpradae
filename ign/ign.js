const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  modeToggle = document.querySelector(".dark-light"),
  saiunkluca = document.querySelector(".saiunkluca"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

  let getMode = localStorage.getItem("mode");
  if(getMode && getMode === "dark-mode"){
  body.classList.add("dark");
  }

// js ��� ��� ������������ ������� � �������� ������
  modeToggle.addEventListener("click" , () =>{
  modeToggle.classList.toggle("cedsamun");
  body.classList.toggle("dark");

  // js ���, ����� ��������� ��������� ������������� ����� ���� ��� ���������� �������� ��� ��������� �������� �����
  if(!body.classList.contains("dark")){
  localStorage.setItem("mode" , "light-mode");
  }else{
  localStorage.setItem("mode" , "dark-mode");
  }
  });

// js ��� ��� ������������ ���� ������
  saiunkluca.addEventListener("click" , () =>{
  saiunkluca.classList.toggle("cedsamun");
  });
   
   
// js ��� ��� ������������ ������� ������
sidebarOpen.addEventListener("click" , () =>{
  nav.classList.add("cedsamun");
});

body.addEventListener("click" , e =>{
  let clickedElm = e.target;

  if(!clickedElm.classList.contains("sidebarOpen") && !clickedElm.classList.contains("menu")){
  nav.classList.remove("cedsamun");
  }
});

.navbar {
  width: 100%;
  padding: 0px 20px 0px 0px;
  background-color: var(--fourth);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  position: fixed;
  z-index: 999;
}

.navbar-links {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-content: center;
}

.navbar a {
  color: var(--primary);
  padding: 0.5vh 0.9vh;
  text-decoration: none;
  font-size: 2vw;
}

.navbar a:hover {
  background-color:var(--primary);
  color:var(--fourth);
}

.navbar a.active {
  background-color: var(--primary);
  color: var(--fourth);
  height: 4vh;
}

.navbar .icon {
  display: none;

}


        <div class="navbar" id="main-navbar">
            <div class="navbar-icon">
                <a href="#top" class="active">.Dev_Nate()</a>
            </div>
            <div clas="navbar-links">
                <a href="#about">.About()</a>
                <a href="#projects">.Projects()</a>
                <a href="#contact">.Contact()</a>
                <a href="javascript:void(0);" class="icon" onclick="navBar()">
                <i class="fa fa-bars"></i></a>
            </div>
        </div>
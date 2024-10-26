<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>About Us</title>
    <style>
        .navbar {
            display: flex;
            justify-content: space-between;
            align-items: center;
            background-color: #333; /* Dark gray background */
            padding: 10px 20px;
        }

        .navbar .logo {
            font-size: 24px;
            font-weight: bold;
            color: white; /* White text */
        }

        .navbar ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
        }

        .navbar ul li {
            margin: 0 15px;
        }

        .navbar ul li a {
            text-decoration: none;
            color: white; /* White text for links */
            font-size: 16px;
        }

        .navbar ul li a:hover {
            color: #ccc; /* Light gray on hover */
        }

        .navbar ul li a.active {
            font-weight: bold; /* Only bold for active link, no color change */
        }

        .navbar .project-btn {
            background-color: #363ff4; 
            color: white;
            padding: 8px 16px;
            border: none;
            border-radius: 5px;
            text-decoration: none;
            font-size: 16px;
        }

        .navbar .project-btn:hover {
            background-color: #2f3ad3; 
        }
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f2f2f2;
        }
        .container {
            max-width: 1000px;
            margin: 50px auto;
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 4px 8px rgba(0,0,0,0.1);
            border-radius: 8px;
        }
        h1 {
            text-align: center;
            color: #333;
        }
        .team-member {
            margin: 20px 0;
        }
        .team-member h2 {
            font-size: 24px;
            color: #363ff4;
        }
        .team-member p {
            font-size: 16px;
            color: #555;
        }
        .team-member img {
            max-width: 150px;
            border-radius: 50%;
            margin-right: 20px;
        }
        .member-info {
            display: flex;
            align-items: center;
        }
        /* ========style about============================================================ */
        .profile-card {
            display: flex;
            margin-top: 50px;
            justify-content: space-around;
            
          }
          .profile-card p{
            font-weight: 700;
          }
          .member {
            border-radius: 10px;
            width: 17%;
            height: 450px;
           position: relative;
            box-shadow: -4px 4px 8px 0 rgba(0, 0, 0, 0.2),
              4px -4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .member:hover {
            box-shadow: 0 -6px 20px 0 rgba(0, 0, 0, 0.19);
          }
          .info-member {
            margin: 0 10px 10px;
           
          }
          .member:nth-child(3) {
            display: inline;
            margin-top: 30px;
            width: 280px;
          }
          img {
            border-radius: 10px 10px 0 0;
            width: 100%;
            height: 150px;
            object-fit: cover;
          }
          span {
            font-weight: 600;
            color: #6c6969;
          }
          i>a {
            display: block;
            text-decoration: none;
            color: black;
            font-weight: 600;
            margin-top: 10px;
          }
          i>a:hover{
            text-decoration: underline;
          }
          .button {
    
            text-decoration: none;
            background: black;
            color: aliceblue;
            border-radius: 20px;
            padding: 10px;
            width: 80%;
          text-align: center;
            position: absolute;
            bottom: 20px;
            left: 16px;
    right: 10px;
          }
          .button:hover {
            background-color: #6c6969;
          }
          
    </style>
</head>
<body>
    <nav class="navbar">
        <div class="logo">GROUP 12</div>
        <ul>
            <li><a href="index.html">Home</a></li>
            <li><a href="about.html">About</a></li>
            <li><a href="#">Technical</a></li>
            <li><a href="#">Group Diary</a></li>
            <li><a href="#" class="active">Project</a></li>
            <li><a href="#">Style Guide</a></li>
            <li><a href="#">Result</a></li>
            <li><a href="#">Contact</a></li>
        </ul>
        <a href="#" class="project-btn">Go to project</a>
    </nav>

    <!-- <div class="container"> -->
        <!-- <h1>Our Team</h1>
        <div class="team-member">
            <div class="member-info">
                <img src="image/Nguyễn Trần Nhật Quân.jpg" alt="Nguyễn Trần Nhật Quân">
                <div>
                    <h2>Nguyễn Trần Nhật Quân (Nhóm trưởng)</h2>
                    <p>MSSV: 23130257</p>
                </div>
            </div>
        </div>
        <div class="team-member">
            <div class="member-info">
                <img src="image/Phạm Hoàng Duy Thức.png" alt="Phạm Hoàng Duy Thức">
                <div>
                    <h2>Phạm Hoàng Duy Thức</h2>
                    <p>MSSV: 23130324</p>
                </div>
            </div>
        </div>
        <div class="team-member">
            <div class="member-info">
                <img src="image/Phạm Nhật Khang.png" alt="Phạm Nhật Khang">
                <div>
                    <h2>Phạm Nhật Khang</h2>
                    <p>MSSV: 23130145</p>
                </div>
            </div>
        </div>
        <div class="team-member">
            <div class="member-info">
                <img src="image/Võ Lê Hương Quỳnh.png" alt="Võ Lê Hương Quỳnh">
                <div>
                    <h2>Võ Lê Hương Quỳnh</h2>
                    <p>MSSV: 23130267</p>
                </div> -->
                
            <!-- </div>
        </div>
        <div class="team-member">
            <div class="member-info">
                <img src="image/Bùi Văn Hiếu.png" alt="Bùi Văn Hiếu">
                <div>
                    <h2>Bùi Văn Hiếu</h2>
                    <p>MSSV: 23130102</p>
                </div>
            </div>
        </div> -->
    <!-- </div> -->
       
          <h2>Meet Our Team</h2>
              <hr />
              <div class="profile-card">
                <div class="member">
                  <img src="./image/Bùi Văn Hiếu.png" alt="" />
                  <div class="info-member">
                    <h2>Bùi Văn Hiếu</h2>
                    <span>Member</span>
                    <p>MSSV:</p>
                    <i><a href="">email</a></i>
                    <a class="button" href="">Contact</a>
                  </div>
                </div>

                <div class="member">
                    <img src="./image/Phạm Hoàng Duy Thức.png" alt="" />
                    <div class="info-member">
                      <h2>Phạm Hoàng Duy Thức</h2>
                      <span>Member</span>
                      <p>MSSV:</p>
                      <i><a href="">email</a></i>
                      <a class="button" href="">Contact</a>
                    </div>
                  </div>

                  <div class="member">
                    <img src="./image/Nguyễn Trần Nhật Quân.jpg" alt="" />
                    <div class="info-member">
                      <h2>Nguyễn Trần Nhật Quân</h2>
                      <span>Leader</span>
                      <i><a href="">email</a></i>
                      <a class="button"  href="">Contact</a>
                    </div>
                  </div>

                  <div class="member">
                    <img src="./image/Phạm Nhật Khang.png" alt="" />
                    <div class="info-member">
                      <h2>Phạm Nhật Khang</h2>
                      <span>Member</span>
                      <p>MSSV:</p>
                      <i><a href="">email</a></i>
                      <a class="button" href="">Contact</a>
                    </div>
                  </div>

                  <div class="member">
                    <img src="./image/Võ Lê Hương Quỳnh.png" alt="" />
                    <div class="info-member">
                      <h2>Võ Lê Hương Quỳnh</h2>
                      <span>Member</span>
                      <p>MSSV: 23130267</p>
                      <i><a href="">23130267@st.hcmuaf.edu.vn</a></i>
                      <a class="button" href="https://quynh106.github.io/my-web/">Contact</a>
                    </div>
                  </div>
          
   

</body>
</html>

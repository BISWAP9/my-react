import styles from "./Profile.module.css";


const Profile = (props) => {
	let userId = location.pathname.split("/")[2];
  let user = props.function(userId);
	// console.log(userId);
  return (
		<div className="row">
			<div className="col-sm-3">
				<img src={user.avatar} alt="" width={"100%"}/>
			</div>
			<div className="col-sm-9">
<h1 style={{backgroundColor: "lightblue"}}>{user.name} {user.lastname}</h1>
<h2 className={styles.about}>{user.about}</h2>
<p className={styles.email}>Email: {user.email}</p>
<p style={{fontWeight: "700"}}>Id: {user.id}</p>
<p className={styles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam veritatis repellat doloremque beatae! Quisquam odit atque tempore a id, quod sit illo quam nemo, culpa voluptatum dolorum corporis facilis!</p>
			</div>
		</div>
	);
};

export default Profile;
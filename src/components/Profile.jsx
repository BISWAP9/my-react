import styles from "./Profile.module.css";


const Profile = (props) => {
	let user = props.function();
	// console.log(user);
  return (
		<div className="row">
			<div className="col-sm-3">
				<img src={user.avatar} alt="" width={"100%"}/>
			</div>
			<div className="col-sm-9">
<h1 style={{backgroundColor: "lightblue"}}>{user.name} {user.lastname}</h1>
<h2 className={styles.about}>{user.about}</h2>
<p>Email: {user.email}</p>
<p>Id: {user.id}</p>
<p className={styles.paragraph}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur aperiam veritatis repellat doloremque beatae! Quisquam odit atque tempore a id, quod sit illo quam nemo, culpa voluptatum dolorum corporis facilis!</p>
			</div>
		</div>
	);
};

export default Profile;
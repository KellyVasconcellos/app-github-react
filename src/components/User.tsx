import { Link } from "react-router-dom";
import { UserProps } from "../types/user";

import {MdLocationPin} from "react-icons/md";

import classes from "./User.module.css";

const User = ({
    login,
    avatar_url,
    name,
    followers,
    following,
    location,
}: UserProps) => {
    return (
        
        <div className={classes.user}>
            <h2 className={name}>{name}</h2>
            <img src={avatar_url} alt={login} />
            <h2>{login}</h2>
            { location && (
                <p className={classes.location}>
                    <MdLocationPin />
                    <span>{location}</span>
                </p>
            )}
            <div className={classes.stats}>
                <div>
                    <p>Seguidores:</p>
                    <p className={classes.number}>{followers}</p>
                </div>
                <div>
                    <p>Seguidor:</p>
                    <p className={classes.number}>{following}</p>
                </div>
                <Link to={`/repos/${login}`}>Ver melhores projetos</Link>
            </div>
        </div>

    )
}

export default User;
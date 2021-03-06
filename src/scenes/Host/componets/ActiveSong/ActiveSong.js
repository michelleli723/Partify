import React from 'react';
import Paper from 'material-ui/Paper';
import {Card, CardActions, CardHeader, CardMedia, CardTitle, CardText} from 'material-ui/Card';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete'
import Badge from 'material-ui/Badge';


const ActiveSong = ({votes, activeSong, visableActive, onDelete}) => (
	<Paper>
		<Card>
			<CardMedia
				overlay={
					<CardTitle title={
						<div>
							<h1><Badge primary={true} badgeContent={votes}>Votes Earned</Badge></h1>
							{activeSong.song.name} by {activeSong.song.artists.map( artist =>  artist.name  )}
							<CardActions>
								{ visableActive &&
								<IconButton
									iconStyle={{
										width: '10vh', 
										height: '10vh'}}
									>
										<DeleteIcon
											style={{width: 0}}
											onClick={() => onDelete(activeSong.song,activeSong.id)}
										/>
									</IconButton>
										}
										{/*<FlatButton label="Vote to Skip" /> */}
									</CardActions>
								</div>
						} subtitle={"Submitted by "+activeSong.author} />}
					>
						<img src={activeSong.img} alt="" />
					</CardMedia>
				</Card>
			</Paper>
)
export default ActiveSong;

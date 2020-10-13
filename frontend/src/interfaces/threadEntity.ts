export interface Thread {
    userID: string,
    topic: string,
    tag_arr: [string],
    content: string,
    image_arr: Images,
    up_vote_arr: [string],
    down_vote_arr: [string],
    up_vote_count: number,
    down_vote_count: number,
    number_of_comment: number,
    date_create: Date,
    date_last_edit: Date,
    date_lelete: Date,
    isanonymous: boolean,
}

interface Images {
    URL: string,
    pos: number,
}
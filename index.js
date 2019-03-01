const{log, assignIncomment, AddMemberRequest, RemoveMemberRequest} = require('./lib')

module.exports = robot =>{
    log(robot, 'start')
    robot.on('membership.added', context => AddMemberRequest(robot,context))
    robot.on('membership.removed', context => RemoveMemberRequest(robot,context))
}
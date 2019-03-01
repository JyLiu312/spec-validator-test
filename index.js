const{log, addMemberRequest, removeMemberRequest} = require('./lib')

module.exports = robot =>{
    log(robot, 'start')
    robot.on('organization.member_added', context => addMemberRequest(robot,context))
    robot.on('organization.member_removed', context => removeMemberRequest(robot,context))
}

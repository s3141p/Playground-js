// https://leetcode.com/problems/course-schedule/

/**
 * 
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    const courses = {};

    for (let i = 0; i < prerequisites.length; i++) {
        const [course, dep] = prerequisites[i];
        courses[course] = dep;
    }



    Object.keys(courses).forEach(course => {

    })
};
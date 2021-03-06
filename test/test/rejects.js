var t = require('../..')

t.rejects('pwner promise', function () {
  return new Promise(function (resolve, reject) {
    reject(new Error('pwn'))
  })
}, new Error('pwn'))

t.rejects(
  'pwner promise',
  new Promise(function (resolve, reject) {
    reject(new Error('pwn'))
  }),
  new Error('pwn'))

t.rejects('owner promise', function () {
  return new Promise(function (resolve, reject) {
    reject(new Error('pwn'))
  })
}, new Error('own'))

t.rejects(
  new Promise(function (resolve, reject) {
    reject(new Error('pwn'))
  }),
  new Error('own'))

t.rejects('resolved promise', function () {
  return new Promise(function (resolve, reject) {
    resolve(10)
  })
}, new Error('own'))

t.rejects(
  new Promise(function (resolve, reject) {
    resolve(10)
  }),
  new Error('own'))

t.rejects(function () {
  return new Promise(function (resolve, reject) {
    reject(new Error('pwn'))
  })
}, new Error('pwn'))

t.rejects(
  new Promise(function (resolve, reject) {
    reject(new Error('pwn'))
  }),
  new Error('pwn'))

t.rejects(function () {
  return new Promise(function (resolve, reject) {
    reject(new Error('pwn'))
  })
}, new Error('own'))

t.rejects(
  new Promise(function (resolve, reject) {
    reject(new Error('pwn'))
  }),
  new Error('own'))

t.rejects(function () {
  return new Promise(function (resolve, reject) {
    resolve(10)
  })
}, new Error('own'))

t.rejects(
  new Promise(function (resolve, reject) {
    resolve(10)
  }),
  new Error('own'))

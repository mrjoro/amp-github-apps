/**
 * Copyright 2020 The AMP HTML Authors. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS-IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

require('dotenv').config();

import express from 'express';
const app = express();
const PORT = process.env.PORT || 8080;

app.get('/', (req, res) => {
  res.send('Hello, world!');
});

app.get('/test-results/pr/:prNumber', (req, res) => {
  const {prNumber} = req.params;
  res.send(`List of test cases for PR number ${prNumber}`);
});

app.get('/test-results/history/:testCaseId', (req, res) => {
  const {testCaseId} = req.params;
  res.send(`Test history for test with name/ID ${testCaseId}`);
});

app.listen(PORT, () => {
  console.log(`Running at http://localhost:${PORT}`);
});
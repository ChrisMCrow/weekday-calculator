import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import { dateToDay } from './../src/date.js';

$(document).ready(function() {
    $('#date').submit(function(event) {
        event.preventDefault();
        let input = $('#inputDate').val();
        console.log(input);
        let day = new Date(input);

        console.log(day);

        $('.results').text(dateToDay(day));
        $('.results').show();
    });
});

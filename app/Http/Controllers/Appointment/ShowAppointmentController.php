<?php

namespace App\Http\Controllers\Appointment;

use App\Appointment;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class ShowAppointmentController extends Controller
{

    protected function index(string $code)
    {
        $appointment = new Appointment();
        
        if (!$appointment->getAppointmentByCode($code)) {
            return view('appointment.notfound');
        }

        return view('appointment.index', ['appointment' => $appointment]);

    }
}

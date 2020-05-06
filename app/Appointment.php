<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Appointment extends Model
{
    protected $table = 'appointments';

    protected $fillable = [
        'code', 'title', 'description', 'attendant_name', 'attendant_email',
    ];

    public function getAppointmentByCode(string $code) {
        return $this->where('code', $code)->first();
    }
}
